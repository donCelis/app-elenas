import { FlatList, StyleSheet, View } from 'react-native'
import { useAppState } from '../overmind'

/* components */
import TextMd from '../components/common/TextMd'
import UserCard from '../components/common/UserCard'
import LoadingModal from '../components/common/Modal'

export default function UserList () {
  const { users } = useAppState()

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        data={users?.data || []}
        renderItem={({ item: user }) => <UserCard {...user} />}
      />
      {/* {loading && <LoadingModal />}
      {!loading && (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
          data={users}
          renderItem={({ item: user }) => <UserCard {...user} />}
        />
      )}
      {error && (
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
