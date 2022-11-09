import { StyleSheet, View } from 'react-native'
import AppBar from './AppBar'
import UsersList from './UsersList'

export default function Main () {
  return (
    <View style={styles.general}>
      <AppBar />
      <UsersList />
    </View>
  )
}

const styles = StyleSheet.create({
  general: {
    flex: 1
  }
})
