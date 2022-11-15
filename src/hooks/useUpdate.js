import { useMutation, useApolloClient } from '@apollo/client'
import { UPDATE_CLIENT } from '../graphql/mutations.js'

export const useUpdate = () => {
  const [updateMutation] = useMutation(UPDATE_CLIENT)
  const apolloClient = useApolloClient()

  const updateUser = async ({
    updateClientId,
    firstName,
    lastName,
    cellphone,
    cedula,
    streetAddress
  }) => {
    const { data } = await updateMutation({
      variables: {
        updateClientId,
        updateClientInput: {
          firstName,
          lastName,
          cellphone,
          cedula,
          address: {
            streetAddress
          }
        }
      }
    })

    console.log(data)

    await apolloClient.resetStore()
  }

  return {
    updateUser
  }
}
