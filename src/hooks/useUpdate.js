import { useActions } from '../overmind'

export const useUpdate = () => {
  const {
    users: { updateUser: updateUserAction }
  } = useActions()

  const updateUser = ({ username, name, phone, id }) => {
    updateUserAction({ username, name, phone, id })
  }

  return {
    updateUser
  }
}
