import { useActions } from '../overmind'

export const useUpdate = () => {
  const {
    users: { updateUser: updateUserAction }
  } = useActions()

  const updateUser = async ({ username, name, phone, id }) => {
    await updateUserAction({ username, name, phone, id })
  }

  return { updateUser }
}
