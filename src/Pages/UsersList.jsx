import { useRef } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useScrollToTop } from '@react-navigation/native'
import { useQuery } from '@apollo/client'

import { GET_USERS } from '../graphql/queries'

/* components */
import UserItem from '../components/User'
import StyledText from '../components/common/StyledText'
import { theme } from '../theme'

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
        renderItem={({ item: user }) => <UserItem {...user} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.whitePure,
    flex: 1
  },
  space: {
    paddingHorizontal: 10
  }
})
