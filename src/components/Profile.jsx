import { StyleSheet, View, Pressable } from 'react-native'

/* components */
import UserHeader from './UserHeader'
import UserBody from './UserBody'
import StyledText from './common/StyledText'

export default function UserItem (user) {
  return (
    <View style={styles.container}>
      <UserHeader {...user} />
      <UserBody {...user} />
      <Pressable>
        <StyledText>
          View Profile
        </StyledText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10
  }
})
