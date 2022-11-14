import { useLinkTo } from '@react-navigation/native'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../theme'
import Avatar from './Avatar'

export default function UserCard ({ id, firstName, lastName, city }) {
  const linkTo = useLinkTo()

  const handleRouting = () => {
    linkTo(`/detail/${id}`)
  }
  return (
    <Pressable onPress={handleRouting}>
      <View style={styles.content}>
        <Avatar size={50} str={firstName} />
        <View style={styles.info}>
          <Text style={styles.title}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.small}>Meta</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.whitePure,
    borderRadius: 5,
    padding: 15,
    marginVertical: 10
  },
  info: {
    marginLeft: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading
  },
  small: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body
  }
})
