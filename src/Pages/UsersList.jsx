import { useRef } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useScrollToTop } from '@react-navigation/native'
import { useQuery } from '@apollo/client'

import { GET_USERS } from '../graphql/queries'

/* components */
import StyledText from '../components/common/StyledText'
import UserCard from '../components/common/UserCard'
import Container from '../components/common/Container'

export default function UsersList () {
  const refList = useRef()
  useScrollToTop(refList)

  const { data, error } = useQuery(GET_USERS)

  const users = data?.clientsSearch?.results || []

  return (
    <Container activeBar>
      <View style={styles.container}>
        {error && (
          <StyledText align='center' fontSize='subheading'>
            {String(error)}
          </StyledText>
        )}
        <FlatList
          ref={refList}
          style={styles.space}
          showsVerticalScrollIndicator={false}
          data={users}
          renderItem={({ item: user }) => <UserCard {...user} />}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  space: {
    paddingHorizontal: 15
  }
})
