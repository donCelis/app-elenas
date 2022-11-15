import { useMutation, useApolloClient } from '@apollo/client'
import { ADD_USER } from '../graphql/mutations.js'

export const useAddUser = () => {
  const [addUserMutation] = useMutation(ADD_USER)
  const apolloClient = useApolloClient()

  const addUser = async ({
    firstName,
    lastName,
    cedula,
    streetAddress,
    cellphone,
    cityId,
    stateId
  }) => {
    const { data } = await addUserMutation({
      variables: {
        createClientInput: {
          firstName,
          lastName,
          cedula,
          address: {
            streetAddress,
            cityId,
            stateId
          },
          cellphone
        }
      }
    })

    console.log(data)

    await apolloClient.resetStore()
  }

  return {
    addUser
  }
}
