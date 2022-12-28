import AddEditForm from '../components/AddEditForm'
import KeyboardShift from '../components/KeyboardShift'
// import { useAddUser } from '../hooks/useAddUser'

export default function CreateUser () {
  // const { addUser } = useAddUser()

  /* const handleAddUser = async (data) => {
    const { cellphone, address } = data
    const response = await addUser({
      ...data,
      cellphone: `+57${cellphone}`,
      cityId: 10,
      stateId: 3,
      streetAddress: address
    })

    return response
  } */

  return (
    <KeyboardShift>
      <AddEditForm /* callBack={handleAddUser} */ />
    </KeyboardShift>
  )
}
