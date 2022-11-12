import { View, StyleSheet, Button, Image } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { theme } from '../theme'

/* validation */
import { loginSchema } from '../schemas/login'
/* components */
import InputField from '../components/common/InputField'

import { useLogin } from '../hooks/useLogin'
import { useNavigate } from 'react-router-native'

export default function LogIn () {
  const navigate = useNavigate()
  const { logIn } = useLogin()

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      cellphone: '+573208335263',
      password: '123456'
    }
  })

  const { handleSubmit, reset } = methods

  const onSubmit = async (data) => {
    try {
      const { cellphone, password } = data
      await logIn({ cellphone, password })
      reset()
      navigate('/user/list')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperLogo}>
        <View style={styles.logo}>
          <Image source={require('../../assets/elenas.png')} />
        </View>
      </View>
      <FormProvider {...methods}>
        <View style={styles.form}>
          <InputField label='Cellphone' name='cellphone' />
          <InputField label='Password' name='password' secureTextEntry />
          <View style={styles.button}>
            <Button
              color={theme.colors.white}
              title='Sign in'
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </FormProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg
  },
  wrapperLogo: {
    backgroundColor: theme.colors.white,
    paddingVertical: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    zIndex: 10
  },
  logo: {
    padding: 12,
    alignSelf: 'center',
    borderRadius: 5
  },
  form: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: -20
  },
  button: {
    backgroundColor: theme.colors.third,
    borderRadius: 5,
    marginTop: 20,
    padding: 5
  },
  error: {
    color: theme.colors.wrong,
    textAlign: 'right'
  }
})
