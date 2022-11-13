import { View, StyleSheet, Button, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { theme } from '../theme'

/* validation */
import { loginSchema } from '../schemas'
/* components */
import InputField from '../components/common/InputField'
/* hooks */
import { useLogin } from '../hooks/useLogin'

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
      navigate('main')
      reset()
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
              disabled={isSubmitting}
              color={theme.colors.white}
              title={isSubmitting ? 'loading' : 'Sign in'}
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
