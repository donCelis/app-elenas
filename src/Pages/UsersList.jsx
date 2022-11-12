import { FlatList, StyleSheet, View } from 'react-native'
import { useQuery } from '@apollo/client'

import { GET_USERS } from '../graphql/queries'

/* components */
import UserItem from '../components/User'
import AppBar from '../components/common/AppBar'
import StyledText from '../components/common/StyledText'

export default function UsersList () {
  const { data = {}, error } = useQuery(GET_USERS)

  const users = data?.clientsSearch?.results || []

  console.log(users)

  return (
    <View style={styles.container}>
      <AppBar />
      {error && (
        <StyledText align='center' fontSize='subheading'>
          {String(error)}
        </StyledText>
      )}
      {/* <FlatList
        style={styles.space}
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item: user }) => <UserItem {...user} />}
      /> */}
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
