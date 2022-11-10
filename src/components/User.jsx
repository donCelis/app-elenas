import { StyleSheet, View } from 'react-native'
import UserHeader from './UserHeader'
import UserBody from './UserBody'

export default function UserItem (user) {
  return (
    <View key={user.id} style={styles.container}>
      <UserHeader {...user} />
      <UserBody {...user} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10
  }
})
