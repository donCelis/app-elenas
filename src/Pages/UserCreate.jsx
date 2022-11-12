import { View } from 'react-native'
import { useLocation, useParams } from 'react-router-native'
import StyledText from '../components/common/StyledText'

export default function UserCreate () {
  const { userId = '' } = useParams()

  const { pathname } = useLocation()

  const isEdit = pathname.includes('edit')

  return (
    <View>
      <StyledText>{isEdit ? 'Edit' : 'Create'}</StyledText>
    </View>
  )
}
