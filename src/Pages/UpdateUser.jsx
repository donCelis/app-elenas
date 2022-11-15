import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import AddEditForm from '../components/AddEditForm'
import { GET_PROFILE } from '../graphql/queries'

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
    <AddEditForm isEdit currentUser={currentUser} />
  )
}
