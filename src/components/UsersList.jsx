import { FlatList, StyleSheet, View } from 'react-native'
import users from '../data/users'
import UserItem from './User'

export default function UsersList () {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.space}
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item: user }) => <UserItem {...user} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  space: {
    paddingHorizontal: 10
  }
})
