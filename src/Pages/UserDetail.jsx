import { StyleSheet, View } from 'react-native'
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'

import { GET_PROFILE } from '../graphql/queries'
import { theme } from '../theme'

/* Components */
import Profile from '../components/Profile'

export default function UserDetail () {
  const { params: { screen } } = useRoute()
  const converNumberId = Number(screen)

  const { data = {} } = useQuery(GET_PROFILE, {
    variables: {
      ids: converNumberId
    }
  })

  const user = data?.clientsSearch?.results[0] || {}

  return (
    <View style={styles.container}>
      <Profile {...user} />
      {/* <Link style={styles.button} to='edit'>
        <StyledText style={styles.text} align='center'>Edit</StyledText>
      </Link> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    backgroundColor: theme.colors.whitePure,
    flex: 1
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 12
  },
  text: {
    color: 'white',
    fontSize: 18
  }
})
