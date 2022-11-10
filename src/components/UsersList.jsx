import { FlatList, StyleSheet, Text, View } from 'react-native'
import users from '../data/users'
import UserItem from './User'

export default function UsersList () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        ItemSeparatorComponent={() => <Text />}
        renderItem={({ item: user }) => <UserItem {...user} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10
  }
})
