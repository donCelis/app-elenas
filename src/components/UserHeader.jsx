import { Image, StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import { theme } from '../theme'
import StyledText from './common/StyledText'

export default function UserHeader ({
  image = 'https://robohash.org/aliquamcumqueiure.png',
  firstName,
  lastName,
  email,
  cellphone,
  cedula = 0,
  bloodGroup = 'A−',
  id
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
        <Link to={`/user/${id}`}>
          <StyledText fontSize='subheading' fontWeight='bold' color='primary'>
            {firstName} {lastName}
          </StyledText>
        </Link>
        <StyledText style={styles.info.nick}>{cedula || 'Empty'}</StyledText>
        <StyledText>Email: {email || 'Empty'}</StyledText>
        <StyledText>Phone: {cellphone}</StyledText>
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
