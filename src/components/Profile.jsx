import { ScrollView, StyleSheet, View } from 'react-native'
import { useLinkTo } from '@react-navigation/native'

import { PATH_PAGE } from '../routes/paths'
import { theme } from '../theme'
import { converDate } from '../utils/convertDate'

/* components */
import Button from '../components/common/Button'
import Avatar from '../components/common/Avatar'
import TextMd from './common/TextMd'
import SignOut from '../pages/SignOut'

export default function Profile ({
  id = 0,
  firstName = '',
  lastName = '',
  cellphone = '',
  registerDate,
  address = '',
  isSeller = '',
  credit = '',
  state = '',
  city = '',
  isEdit = false,
  email = 'Empty',
  cedula = 0
}) {
  const linkTo = useLinkTo()
  const handleEdit = () => {
    linkTo(`/${PATH_PAGE.update}/${id}`)
  }

  const formatRegisterDate = converDate(registerDate)

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar str={firstName} size={85} />
        <TextMd
          style={styles.username}
          fontWeight='bold'
          align='center'
          fontSize='title'
        >
          {firstName} {lastName}
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
          <TextMd fontWeight='bold'>Phone</TextMd>
          <TextMd>{cellphone}</TextMd>
        </View>
        {
          !isEdit && (
            <View style={styles.innerCard}>
              <TextMd fontWeight='bold'>Cedula</TextMd>
              <TextMd>{cedula}</TextMd>
            </View>
          )
        }
        <View style={styles.innerCard}>
          <TextMd fontWeight='bold'>Created</TextMd>
          <TextMd>{formatRegisterDate}</TextMd>
        </View>
        <View style={styles.innerCard}>
          <TextMd fontWeight='bold'>Email</TextMd>
          <TextMd>{email}</TextMd>
        </View>
        <View style={styles.innerCard}>
          <TextMd fontWeight='bold'>City</TextMd>
          <TextMd>{address?.city || city}</TextMd>
        </View>
        {
          !isEdit && (
            <SignOut />
          )
        }
        {
          isEdit && (
            <>
              <View style={styles.innerCard}>
                <TextMd fontWeight='bold'>State</TextMd>
                <TextMd>{state?.displayName}</TextMd>
              </View>
              <View style={styles.innerCard}>
                <TextMd fontWeight='bold'>Short Code</TextMd>
                <TextMd>{state?.shortCode}</TextMd>
              </View>
              <View style={styles.innerCard}>
                <TextMd fontWeight='bold'>Is Seller</TextMd>
                <TextMd>{isSeller ? '🟢' : '🔴'}</TextMd>
              </View>
              <View style={styles.innerCard}>
                <TextMd fontWeight='bold'>Credit</TextMd>
                <TextMd>{credit}</TextMd>
              </View>
              <Button title='Edit' onPress={handleEdit} />
            </>
          )
        }
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
