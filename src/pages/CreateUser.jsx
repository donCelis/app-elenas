import AddEditForm from '../components/AddEditForm'
import KeyboardShift from '../components/KeyboardShift'
import { useAddUser } from '../hooks/useAddUser'

export default function CreateUser () {
  const { addUser } = useAddUser()

  const handleAddUser = async (data) => {
    const { firstName, lastName, cedula, cellphone, address } = data
    await addUser({
      firstName,
      lastName,
      cedula,
      cellphone: `+57${cellphone}`,
      cityId: 10,
      stateId: 3,
      streetAddress: address
    })
  }
  return (
    <KeyboardShift>
      <AddEditForm callBack={handleAddUser} />
    </KeyboardShift>
  )
}
