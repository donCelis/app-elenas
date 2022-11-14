import { StyleSheet, View } from 'react-native'

/* components */
import UserHeader from './UserHeader'
import UserBody from './UserBody'
import Button from '../components/common/Button'
import { useNavigation } from '@react-navigation/native'

export default function UserItem (user) {
  const { setOptions } = useNavigation()
  return (
    <View style={styles.container}>
      <UserHeader {...user} />
      <UserBody {...user} />
      <Button title='Edit' onPress={() => setOptions({ title: 'Updated!' })} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10
  }
})
