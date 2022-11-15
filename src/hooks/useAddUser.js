import { useMutation, useApolloClient } from '@apollo/client'
import { ADD_USER } from '../graphql/mutations.js'

export const useAddUser = () => {
  const [addUserMutation] = useMutation(ADD_USER)
  const apolloClient = useApolloClient()

  const addUser = async ({
    updateClientId,
    firstName,
    lastName,
    cellphone,
    cedula,
    streetAddress
  }) => {
    const { data } = await addUserMutation({
      variables: {
        createClientInput: {
          firstName: 'Jefe',
          lastName: 'Maestro',
          cedula: '117',
          address: {
            streetAddress: 'cll 123',
            city: 'Medellín',
            cityId: 3,
            stateId: 1
          },
          cellphone: '+573001122334',
          email: 'jefemaestro@correo.com'
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
