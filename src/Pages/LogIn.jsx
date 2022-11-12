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
import authStorage from '../utils/authStorage'
import { useEffect } from 'react'

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
      navigate('/users')
    } catch (e) {
      console.log(e)
    }
  }

  /* useEffect(() => {
    const test = async () => {
      const testToken = await authStorage.getAccessToken()
      console.log(testToken)
    }
    test()
  }, []) */

  return (
    <FormProvider {...methods}>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 50,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          zIndex: 10
        }}
      >
        <View style={styles.wrapperLogo}>
          <Image
            style={styles.logo}
            source={require('../../assets/elenas.png')}
          />
        </View>
      </View>
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
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: -20,
    backgroundColor: theme.colors.bg
    /* justifyContent: 'center' */
  },
  wrapperLogo: {
    padding: 12,
    alignSelf: 'center',
    backgroundColor: 'white',
    /* backgroundColor: 'white' || '#ecf0f1', */
    borderRadius: 5
    /* marginBottom: 30 */
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
