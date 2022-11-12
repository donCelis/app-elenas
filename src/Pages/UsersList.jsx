import { FlatList, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client'

import { GET_USERS } from '../graphql/queries'

/* components */
import Container from '../components/common/Container'
import UserItem from '../components/User'
import StyledText from '../components/common/StyledText'

export default function UsersList () {
  const { data, error } = useQuery(GET_USERS)

  const users = data?.clientsSearch?.results || []

  return (
    <Container>
      {error && (
        <StyledText align='center' fontSize='subheading'>
          {String(error)}
        </StyledText>
      )}
      <FlatList
        style={styles.space}
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item: user }) => <UserItem {...user} />}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  space: {
    paddingHorizontal: 10
  }
})
