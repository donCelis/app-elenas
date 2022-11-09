import { FlatList, StyleSheet, Text, View } from 'react-native'
import users from '../data/users'
import UserItem from './User'

export default function UsersList () {
  return (
    <View>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        ItemSeparatorComponent={() => <Text />}
        renderItem={({ item: user }) => <UserItem {...user} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 5
  }
})
