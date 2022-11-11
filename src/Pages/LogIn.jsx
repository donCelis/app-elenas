import { View, StyleSheet, Button } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { theme } from '../theme'

/* components */
import InputField from '../components/common/InputField'

export default function LogIn () {
  const methods = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const {
    handleSubmit,
    reset
  } = methods

  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

  return (
    <FormProvider {...methods}>
      <View style={styles.form}>
        <InputField label='Username' name='username' />
        <InputField
          label='Password'
          name='password'
          secureTextEntry
          keyboardType='numeric'
        />
        <View style={styles.button}>
          <Button
            color={theme.colors.white}
            title='LogIn'
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
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#0e101c'
  },
  button: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    marginTop: 20,
    padding: 5
  },
  error: {
    color: theme.colors.wrong,
    textAlign: 'right'
  }
})
