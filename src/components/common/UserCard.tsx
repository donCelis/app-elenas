import { useLinkTo } from '@react-navigation/native'
import { memo } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { PATH_PAGE } from '../../routes/paths'
import { theme } from '../../theme'

/* components */
import Avatar from './Avatar'
import Favs from './Favs'

function UserCard (user) {
  const { id, name, username } = user
  const linkTo = useLinkTo()

  const handleRouting = () => {
    linkTo(`/${PATH_PAGE.detail}/${id}`)
  }

  return (
    <View style={styles.row}>
      <Pressable style={styles.content} onPress={handleRouting}>
        <Avatar size={50} str={name} />
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.small}>{username}</Text>
        </View>
      </Pressable>
      <Favs {...user} />
    </View>
  )
}

export default memo(UserCard)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.whitePure,
    marginVertical: 10,
    borderRadius: 5
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    flex: 1
  },
  info: {
    marginLeft: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading,
    textTransform: 'capitalize'
  },
  small: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body
  }
})
