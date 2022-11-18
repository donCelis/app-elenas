import { View, StyleSheet, Image } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { PATH_PAGE } from '../routes/paths'

/* validation */
import { loginSchema } from '../schemas'
/* components */
import Container from '../components/common/Container'
import KeyboardShift from '../components/KeyboardShift'
import InputField from '../components/common/InputField'
import Button from '../components/common/Button'
import TextMd from '../components/common/TextMd'
/* hooks */
import { useLogin } from '../hooks/useLogin'

export default function LogIn () {
  const { dispatch } = useNavigation()
  const { replace } = StackActions
  const { logIn } = useLogin()

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      cellphone: '+573208335263',
      password: '123456'
    }
  })

  const {
    handleSubmit,
    reset: resetForm,
    formState: { isSubmitting }
  } = methods

  const onSubmit = async (data) => {
    try {
      const { cellphone, password } = data
      await logIn({ cellphone, password })
      /* disable navigation to login */
      dispatch(replace(PATH_PAGE.home))
      resetForm()
    } catch (e) {
      console.log(e)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <KeyboardShift>
        <View style={styles.login}>
          <View style={styles.logo}>
            <Image
              style={{ width: 220 }}
              resizeMode='contain'
              source={require('../../assets/elenas.png')}
            />
          </View>
          <FormProvider {...methods}>
            <View style={styles.form}>
              <InputField
                placeholder='+57'
                label='Cellphone'
                name='cellphone'
                bottonError
              />
              <InputField
                mod={styles.space}
                placeholder=':)'
                label='Password'
                name='password'
                secureTextEntry
                bottonError
              />
              <Button
                disabled={isSubmitting}
                onPress={handleSubmit(onSubmit)}
                title={isSubmitting ? 'Loading' : 'Sign in'}
              />
            </View>
          </FormProvider>
          <TextMd align='center' color='secondary'>
            {currentYear}
          </TextMd>
        </View>
      </KeyboardShift>
    </Container>
  )
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    padding: 12,
    alignSelf: 'center'
  },
  form: {
    padding: 20
  },
  space: {
    marginTop: 15,
    marginBottom: 35
  }
})
