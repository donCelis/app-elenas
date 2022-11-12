import { StyleSheet, View } from 'react-native'
import { theme } from '../theme'
import StyledText from './common/StyledText'

export default function UserBody ({ city, state, isSeller }) {
  return (
    <>
      <StyledText fontWeight='bold' color='primary' style={styles.title}>
        Detail Person
      </StyledText>
      <View style={styles['content-box']}>
        <View>
          <StyledText style={styles.space} align='center' fontWeight='bold'>
            City
          </StyledText>
          <StyledText align='center'>{city}</StyledText>
        </View>
        <View>
          <StyledText style={styles.space} align='center' fontWeight='bold'>
            State
          </StyledText>
          <StyledText align='center'>{state?.displayName}</StyledText>
        </View>
        <View>
          <StyledText style={styles.space} align='center' fontWeight='bold'>
            ShortCode
          </StyledText>
          <StyledText align='center'>{state?.shortCode}</StyledText>
        </View>
        <View>
          <StyledText style={styles.space} align='center' fontWeight='bold'>
            Seller
          </StyledText>
          <StyledText align='center'>{isSeller ? '🟢' : '🔴'}</StyledText>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 10
  },
  'content-box': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: theme.colors.gray,
    borderRadius: 5
  },
  space: {
    paddingBottom: 5
  }
})
