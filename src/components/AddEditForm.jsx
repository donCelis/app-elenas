import { useEffect, useMemo } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { addUserSchema } from '../schemas'
import { theme } from '../theme'
import { useUpdate } from '../hooks/useUpdate'

/* components */
import InputField from './common/InputField'
import Button from './common/Button'
import { useNavigation } from '@react-navigation/native'

export default function AddEditForm ({ currentUser, isEdit = false, navigation }) {
  const { goBack } = useNavigation()
  const { updateUser } = useUpdate()
  const defaultValues = useMemo(
    () => ({
      id: currentUser?.id || 0,
      firstName: currentUser?.firstName || '',
      lastName: currentUser?.lastName || '',
      cellphone: currentUser?.cellphone || '',
      cedula: currentUser?.cedula || '',
      address: currentUser?.address || ''
    }),
    [currentUser]
  )
  const methods = useForm({
    resolver: yupResolver(addUserSchema),
    defaultValues
  })

  const {
    handleSubmit,
    reset: resetForm,
    formState: { isSubmitting }
  } = methods

  useEffect(() => {
    if (isEdit && currentUser) {
      resetForm(defaultValues)
    }
    if (!isEdit) {
      resetForm(defaultValues)
    }
  }, [isEdit, currentUser])

  const onSubmit = async (data) => {
    try {
      const { firstName, lastName, cellphone, cedula, address } = data
      isEdit &&
        (await updateUser({
          updateClientId: currentUser?.id,
          firstName,
          lastName,
          cellphone,
          cedula,
          streetAddress: address
        }))
      goBack()
    } catch (e) {
      console.log(e)
    }
  }

  const titleBtn = !isEdit ? 'Save' : 'Update'

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
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
          title={isSubmitting ? 'Loading' : titleBtn}
        />
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
