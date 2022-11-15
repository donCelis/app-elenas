import { StyleSheet, View } from 'react-native'
import { useLinkTo } from '@react-navigation/native'

import { PATH_PAGE } from '../routes/paths'
import { theme } from '../theme'
import { converDate } from '../utils/convertDate'

/* components */
import Button from '../components/common/Button'
import Avatar from '../components/common/Avatar'
import TextMd from './common/TextMd'

export default function Profile (user) {
  const linkTo = useLinkTo()
  const handleEdit = () => {
    linkTo(`/${PATH_PAGE.update}/${user?.id}`)
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.avatar}
      >
        <Avatar str={user.firstName} size={120} />
        <TextMd
          style={{
            marginVertical: 20
          }}
          fontWeight='bold'
          align='center'
          fontSize='title'
        >
          {user.firstName} {user.lastName}
        </TextMd>
      </View>
      <View style={styles.innerCard}>
        <TextMd fontWeight='bold'>Id</TextMd>
        <TextMd>{user.id}</TextMd>
      </View>
      <View style={styles.innerCard}>
        <TextMd fontWeight='bold'>Phone</TextMd>
        <TextMd>{user.cellphone}</TextMd>
      </View>
      <View style={styles.innerCard}>
        <TextMd fontWeight='bold'>City</TextMd>
        <TextMd>{user.city}</TextMd>
      </View>
      <View style={styles.innerCard}>
        <TextMd fontWeight='bold'>State</TextMd>
        <TextMd>{user.state?.displayName}</TextMd>
      </View>
      <View style={styles.innerCard}>
        <TextMd fontWeight='bold'>Short Code</TextMd>
        <TextMd>{user.state?.shortCode}</TextMd>
      </View>
      <View style={styles.innerCard}>
        <TextMd fontWeight='bold'>Created</TextMd>
        <TextMd>{converDate(user?.registerDate)}</TextMd>
      </View>
      <View style={styles.innerCard}>
        <TextMd fontWeight='bold'>Is Seller</TextMd>
        <TextMd>{user.isSeller ? '🟢' : '🔴'}</TextMd>
      </View>
      <View style={styles.innerCard}>
        <TextMd fontWeight='bold'>Address</TextMd>
        <TextMd>{user.address}</TextMd>
      </View>
      <View style={styles.innerCard}>
        <TextMd fontWeight='bold'>Credit</TextMd>
        <TextMd>{user.credit}</TextMd>
      </View>
      <Button title='Edit' onPress={handleEdit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatar: {
    alignItems: 'center'
  },
  innerCard: {
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: theme.colors.whitePure,
    padding: 15,
    justifyContent: 'space-between',
    marginVertical: 10,
    flex: 1
  }
})
