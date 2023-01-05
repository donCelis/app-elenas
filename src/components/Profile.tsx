import { ScrollView, StyleSheet, View } from 'react-native'

import { theme } from '../theme'

/* components */
import Avatar from './common/Avatar'
import TextMd from './common/TextMd'

export default function Profile ({
  id = 0,
  name = '',
  username = '',
  isEdit = false,
  email = 'Empty',
  phone = 0,
  children
}) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar str={name} size={85} />
        <TextMd
          style={styles.username}
          fontWeight='bold'
          align='center'
          fontSize='title'
        >
          {name}
        </TextMd>
      </View>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.innerCard}>
          <TextMd fontWeight='bold'>Id</TextMd>
          <TextMd>{id}</TextMd>
        </View>
        <View style={styles.innerCard}>
          <TextMd fontWeight='bold'>Username</TextMd>
          <TextMd>{username}</TextMd>
        </View>
        <View style={styles.innerCard}>
          <TextMd fontWeight='bold'>Cellphone</TextMd>
          <TextMd>{phone}</TextMd>
        </View>
        <View style={styles.innerCard}>
          <TextMd fontWeight='bold'>Email</TextMd>
          <TextMd>{email}</TextMd>
        </View>
        {children}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    padding: 15
  },
  avatar: {
    alignItems: 'center',
    paddingVertical: 20
  },
  username: {
    marginTop: 10,
    textTransform: 'capitalize'
  },
  innerCard: {
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: theme.colors.whitePure,
    padding: 15,
    justifyContent: 'space-between',
    marginBottom: 20
  }
})
