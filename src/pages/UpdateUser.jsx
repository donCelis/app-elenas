import { useUpdate } from '../hooks/useUpdate'
/* components */
import KeyboardShift from '../components/KeyboardShift'
import AddEditForm from '../components/AddEditForm'

export default function UpdateUser ({ route }) {
  const currentUser = route?.params

  const { updateUser } = useUpdate()

  const handleUpdateUser = async (data) => {
    const { firstName, lastName, cedula, cellphone, address } = data
    await updateUser({
      updateClientId: currentUser?.id,
      firstName,
      lastName,
      cellphone,
      cedula,
      streetAddress: address
    })
  }

  return (
    <KeyboardShift>
      <AddEditForm
        isEdit
        currentUser={currentUser}
        callBack={handleUpdateUser}
      />
    </KeyboardShift>
  )
}
