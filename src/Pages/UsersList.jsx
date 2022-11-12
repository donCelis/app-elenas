import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useQuery } from '@apollo/client'

import { GET_USERS } from '../graphql/queries'

/* components */
import UserItem from '../components/User'
import AppBar from '../components/common/AppBar'

export default function UsersList () {
  const { data, loading } = useQuery(GET_USERS)

  return (
    <View style={styles.container}>
      <AppBar />
      {
        loading
          ? <Text>Loading</Text>
          : <FlatList
              style={styles.space}
              showsVerticalScrollIndicator={false}
              data={data?.users}
              renderItem={({ item: user }) => <UserItem {...user} />}
            />

      }
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
