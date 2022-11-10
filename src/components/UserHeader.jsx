import { Image, StyleSheet, View } from 'react-native'
import { theme } from '../theme'
import StyledText from './StyledText'

export default function UserHeader ({
  image,
  firstName,
  lastName,
  email,
  phone,
  username,
  bloodGroup
}) {
  return (
    <View style={styles.card}>
      <View style={styles.photo}>
        <Image
          style={styles.photo.img}
          source={{
            uri: image
          }}
        />
        <StyledText style={styles.blood}>{bloodGroup}</StyledText>
      </View>
      <View style={styles.info}>
        <StyledText fontSize='subheading' fontWeight='bold' color='primary'>
          {firstName} {lastName}
        </StyledText>
        <StyledText style={styles.info.nick}>{username}</StyledText>
        <StyledText>Email: {email}</StyledText>
        <StyledText>Phone: {phone}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  photo: {
    marginRight: 10,
    position: 'relative',
    img: {
      width: 100,
      height: 100,
      borderRadius: 5,
      backgroundColor: theme.colors.textSecondary
    }
  },
  blood: {
    position: 'absolute',
    color: theme.colors.white,
    fontSize: theme.fontSizes.body,
    bottom: 5,
    right: 5,
    backgroundColor: 'black',
    padding: 2,
    borderRadius: 5,
    overflow: 'hidden'
  },
  info: {
    marginLeft: 10,
    flex: 1,
    nick: {
      padding: 5,
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
      alignSelf: 'flex-start',
      borderRadius: 5,
      overflow: 'hidden',
      marginVertical: 5
    }
  }
})
