import { View, StyleSheet, Button, Image } from 'react-native'
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
      <View
        style={{
          backgroundColor: theme.colors.gray,
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
      <View style={styles.container}>
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
      </View>
    </FormProvider>
  )
}

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: theme.colors.gray || '#ecf0f1',
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
