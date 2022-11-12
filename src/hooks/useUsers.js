import { useMutation } from '@apollo/client'
import { LOGIN } from '../graphql/mutations'

export const useUsers = (cellphone, password) => {
  const [login] = useMutation(LOGIN, {
    variables: {
      cellphone,
      password
    }
  })

  return login
}
