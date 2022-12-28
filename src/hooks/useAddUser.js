import { useActions } from '../overmind'

export const useAddUser = () => {
  const {
    users: { addUser: addUserAction }
  } = useActions()

  const addUser = ({ username, name, email, phone }) => {
    const data = addUserAction({ username, name, email, phone })
    return data
  }

  return { addUser }
}
