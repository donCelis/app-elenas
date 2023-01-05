import { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useActions, useAppState } from '../overmind'

/* components */
import UserCard from '../components/common/UserCard'
import LoadingModal from '../components/common/Modal'

export default function UserList () {
  const {
    users,
    loading
  } = useAppState()
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatlist: {
    paddingVertical: 10,
    paddingHorizontal: 15
  }
})
