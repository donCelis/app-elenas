import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'
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
        <FlashList
          showsVerticalScrollIndicator={false}
          data={users ?? []}
          renderItem={({ item: user }) => <UserCard {...user} />}
          estimatedItemSize={80}
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
