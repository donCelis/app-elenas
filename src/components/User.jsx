import { StyleSheet, View } from 'react-native'
import UserHeader from './UserHeader'
import VisualPerson from './VisualPerson'

export default function UserItem (user) {
  return (
    <View key={user.id} style={styles.container}>
      <UserHeader {...user} />
      <VisualPerson {...user} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10
  }
})
