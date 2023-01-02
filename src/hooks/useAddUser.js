import { useActions } from '../overmind'

export const useAddUser = () => {
  const {
    users: { addUser: addUserAction }
  } = useActions()

  const addUser = async ({ username, name, email, phone }) => {
    const data = await addUserAction({ username, name, email, phone })
    return data
  }

  return { addUser }
}
