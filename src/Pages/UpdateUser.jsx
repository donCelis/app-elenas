import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import { GET_PROFILE } from '../graphql/queries'

/* components */
import KeyboardShift from '../components/KeyboardShift'
import AddEditForm from '../components/AddEditForm'

export default function UpdateUser () {
  const {
    params: { screen }
  } = useRoute()
  const NumberId = Number(screen)

  const { data = {} } = useQuery(GET_PROFILE, {
    variables: {
      ids: NumberId
    }
  })

  const currentUser = data?.clientsSearch?.results[0] || {}

  return (
    <KeyboardShift>
      <AddEditForm isEdit currentUser={currentUser} />
    </KeyboardShift>
  )
}
