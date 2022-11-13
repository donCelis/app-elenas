import { Button, StyleSheet, View } from 'react-native'
import { useLinkTo } from '@react-navigation/native'

/* components */
import UserHeader from './UserHeader'
import UserBody from './UserBody'

export default function UserItem (user) {
  const linkTo = useLinkTo()

  const handleRouting = () => {
    /* linkTo(`/detail/${user.id}`) */
    linkTo(`/detail/${user.id}`)
  }
  return (
    <View key={user.id} style={styles.container}>
      <UserHeader {...user} />
      <UserBody {...user} />
      <Button title='View Profile' onPress={handleRouting} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10
  }
})
