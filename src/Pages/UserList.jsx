import { FlatList, StyleSheet, View } from 'react-native'
import { useQuery } from '@apollo/client'

import { GET_USERS } from '../graphql/queries'

/* components */
import TextMd from '../components/common/TextMd'
import UserCard from '../components/common/UserCard'

export default function UserList () {
  const { data, error } = useQuery(GET_USERS)

  const users = data?.clientsSearch?.results || []

  return (
    <View style={styles.container}>
      {error && (
        <TextMd align='center' fontSize='subheading'>
          {String(error)}
        </TextMd>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item: user }) => <UserCard {...user} />}
        contentContainerStyle={styles.flatlist}
      />
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
