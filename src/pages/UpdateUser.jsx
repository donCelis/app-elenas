import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import { GET_SINGLE_USER } from '../graphql/queries'

import { useUpdate } from '../hooks/useUpdate'
/* components */
import KeyboardShift from '../components/KeyboardShift'
import AddEditForm from '../components/AddEditForm'

export default function UpdateUser () {
  const { params: { screen } } = useRoute()
  const NumberId = Number(screen)

  const { data = {} } = useQuery(GET_SINGLE_USER, {
    variables: {
      ids: NumberId
    }
  })
  const { updateUser } = useUpdate()

  const currentUser = data?.clientsSearch?.results[0] || {}

  const handleUpdateUser = async (data) => {
    const { firstName, lastName, cedula, cellphone, address } = data
    await updateUser({
      updateClientId: currentUser?.id,
      firstName,
      lastName,
      cellphone,
      cedula,
      streetAddress: address
    })
  }

  return (
    <KeyboardShift>
      <AddEditForm
        isEdit
        currentUser={currentUser}
        callBack={handleUpdateUser}
      />
    </KeyboardShift>
  )
}
