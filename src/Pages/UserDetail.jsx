import { useQuery } from '@apollo/client'
import { StyleSheet, View } from 'react-native'
import { Link, useParams } from 'react-router-native'

import { GET_USERS } from '../graphql/queries'
import { theme } from '../theme'

/* Components */
import StyledText from '../components/common/StyledText'
import UserItem from '../components/User'

export default function UserDetail () {
  const { userId } = useParams()
  const converNumberId = Number(userId)

  const { data = {} } = useQuery(GET_USERS, {
    variables: {
      ids: converNumberId
    }
  })

  const user = data?.clientsSearch?.results[0] || {}

  return (
    <View style={styles.container}>
      <StyledText align='center' fontSize='subheading'>User Detail</StyledText>
      <UserItem {...user} />
      <Link style={styles.button} to='edit'>
        <StyledText style={styles.text} align='center'>Edit</StyledText>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20
  },
  button: {
    backgroundColor: theme.colors.third,
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 12
  },
  text: {
    color: 'white',
    fontSize: 18
  }
})
