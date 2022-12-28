import AddEditForm from '../components/AddEditForm'
import KeyboardShift from '../components/KeyboardShift'
import { useAddUser } from '../hooks/useAddUser'

export default function CreateUser () {
  const { addUser } = useAddUser()

  const handleAddUser = (data) => {
    const response = addUser({ ...data })
    return response
  }

  return (
    <KeyboardShift>
      <AddEditForm callBack={handleAddUser} />
    </KeyboardShift>
  )
}
