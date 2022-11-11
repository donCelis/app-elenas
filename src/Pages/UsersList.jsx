import { FlatList, StyleSheet, View } from 'react-native'
// import users from '../data/users'

/* components */
import UserItem from '../components/User'
import { useEffect, useState } from 'react'

export default function UsersList () {
  const [users, setUsers] = useState(null)

  const fetchData = async () => {
    const response = await globalThis.fetch('https://dummyjson.com/users?limit=20')
    const { users } = await response.json()
    setUsers(users)
  }

  useEffect(() => {
    fetchData()
  }, [])

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
