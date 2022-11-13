import { View, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { theme } from '../theme'

/* validation */
import { loginSchema } from '../schemas'
/* components */
import InputField from '../components/common/InputField'
import Button from '../components/common/Button'
/* hooks */
import { useLogin } from '../hooks/useLogin'
import { PATH_PAGE } from '../paths'
import Container from '../components/common/Container'

export default function LogIn () {
  const { navigate } = useNavigation()
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
    reset,
    formState: { isSubmitting }
  } = methods

  const onSubmit = async (data) => {
    try {
      const { cellphone, password } = data
      await logIn({ cellphone, password })
      navigate(PATH_PAGE.home)
      reset()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container activeBar theme='dark'>
      <View style={styles.login}>
        <View style={styles.wrapperLogo}>
          <View style={styles.logo}>
            <Image source={require('../../assets/elenas.png')} />
          </View>
        </View>
        <FormProvider {...methods}>
          <View style={styles.form}>
            <InputField label='Cellphone' name='cellphone' />
            <InputField label='Password' name='password' secureTextEntry />
            <Button
              disabled={isSubmitting}
              onPress={handleSubmit(onSubmit)}
              title={isSubmitting ? 'loading' : 'Sign in'}
            />
          </View>
        </FormProvider>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: theme.colors.bg,
    flex: 1
  },
  wrapperLogo: {
    backgroundColor: theme.colors.white,
    paddingVertical: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    zIndex: 10
  },
  logo: {
    padding: 12,
    alignSelf: 'center'
  },
  form: {
    padding: 20
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 15
  },
  error: {
    color: theme.colors.wrong,
    textAlign: 'right'
  }
})
