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
    const { data: { createClient } } = await addUserMutation({
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

    if (createClient?.errors) {
      return createClient?.errors
    } else {
      await apolloClient.resetStore()
    }
  }

  return {
    addUser
  }
}
