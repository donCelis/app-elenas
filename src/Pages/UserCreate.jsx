import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { addUserSchema } from '../schemas'
import { theme } from '../theme'

/* components */
import InputField from '../components/common/InputField'
import Button from '../components/common/Button'

const variables = {
  updateClientId: null,
  updateClientInput: {
    firstName: null,
    lastName: null,
    cellphone: null,
    cedula: null,
    address: {
      streetAddress: null
    }
  }
}

export default function UserCreate () {
  const methods = useForm({
    resolver: yupResolver(addUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      cellphone: '',
      cedula: '',
      address: ''
    }
  })

  const {
    handleSubmit,
    reset: resetForm,
    formState: { isSubmitting }
  } = methods

  const onSubmit = async (data) => {
    try {
      const { firstName, lastName, cellphone, cedula, address } = data
      /* await logIn({ cellphone, password }) */

      resetForm()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior='padding'
          enabled
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.inner}>
              <InputField topError label='First Name' name='firstName' />
            </View>
            <View style={styles.inner}>
              <InputField topError label='Last Name' name='lastName' />
            </View>
            <View style={styles.inner}>
              <InputField topError label='Document' name='cedula' />
            </View>
            <View style={styles.inner}>
              <InputField topError label='Address' name='address' />
            </View>
            <View style={[styles.inner, styles.space]}>
              <InputField topError label='Cellphone' name='cellphone' />
            </View>
          </ScrollView>
          <Button
            disabled={isSubmitting}
            onPress={handleSubmit(onSubmit)}
            title={isSubmitting ? 'Loading' : 'Save'}
          />
        </KeyboardAvoidingView>
      </FormProvider>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  inner: {
    backgroundColor: theme.colors.whitePure,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  space: {
    marginBottom: 20
  }
})
