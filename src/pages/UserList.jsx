import { FlatList, StyleSheet, View } from 'react-native'
import { useActions, useAppState } from '../overmind'

/* components */
// import TextMd from '../components/common/TextMd'
import UserCard from '../components/common/UserCard'
import { useEffect } from 'react'
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
    getUsers()
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
      {/* {error && (
        <TextMd align='center' fontSize='subheading'>
          {String(error)}
        </TextMd>
      )} */}
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
