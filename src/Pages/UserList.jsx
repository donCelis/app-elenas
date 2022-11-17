import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { useQuery } from '@apollo/client'

import { GET_USERS } from '../graphql/queries'

/* components */
import TextMd from '../components/common/TextMd'
import UserCard from '../components/common/UserCard'
import { theme } from '../theme'

export default function UserList () {
  const { data, error, loading } = useQuery(GET_USERS)

  const users = data?.clientsSearch?.results || []

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size='large' color={theme.colors.primary} />}
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
