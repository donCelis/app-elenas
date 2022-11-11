import { View, StyleSheet, Button } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { theme } from '../theme'

/* validation */
import { loginSchema } from '../schemas/login'
/* components */
import InputField from '../components/common/InputField'

export default function LogIn () {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const { handleSubmit, reset } = methods

  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

  return (
    <FormProvider {...methods}>
      <View style={styles.form}>
        <InputField label='Username' name='username' />
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
    padding: 20,
    backgroundColor: '#2c3e50'
  },
  button: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginTop: 20,
    padding: 5
  },
  error: {
    color: theme.colors.wrong,
    textAlign: 'right'
  }
})
