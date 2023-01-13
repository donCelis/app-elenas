import { useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { useActions, useAppState } from '../overmind'

/* components */
import LoadingModal from '../components/common/Modal'
import UserCard from '../components/common/UserCard'

function UserList () {
  const { users, loading } = useAppState()
  const {
    users: { getUsers }
  } = useActions()

  useEffect(() => {
    if (users.length === 0) {
      getUsers()
    }
  }, [])

  return (
    <View style={styles.container}>
      {loading && <LoadingModal />}
      {!loading && (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
          data={users ?? []}
          renderItem={({ item: user }) => <UserCard {...user} />}
        />
      )}
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatlist: {
    paddingVertical: 10,
    paddingHorizontal: 15
  }
})
