import { StyleSheet, View } from 'react-native'

/* components */
import UserHeader from './UserHeader'
import UserBody from './UserBody'
import Button from '../components/common/Button'
import { useLinkTo } from '@react-navigation/native'
import { PATH_PAGE } from '../routes/paths'

export default function UserItem (user) {
  const linkTo = useLinkTo()
  const handleEdit = () => {
    linkTo(`/${PATH_PAGE.update}/${user?.id}`)
  }
  return (
    <View style={styles.container}>
      <UserHeader {...user} />
      <UserBody {...user} />
      <Button title='Edit' onPress={handleEdit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10
  }
})
