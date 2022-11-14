import { useRef } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useScrollToTop } from '@react-navigation/native'
import { useQuery } from '@apollo/client'

import { GET_USERS } from '../graphql/queries'

/* components */
import StyledText from '../components/common/StyledText'
import UserCard from '../components/common/UserCard'

export default function UsersList () {
  const refList = useRef()
  useScrollToTop(refList)

  const { data, error } = useQuery(GET_USERS)

  const users = data?.clientsSearch?.results || []

  return (
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  space: {
    paddingHorizontal: 15
  }
})
