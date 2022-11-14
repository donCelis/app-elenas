import { StyleSheet, View } from 'react-native'
import { theme } from '../theme'
import TextMd from './common/TextMd'

export default function UserBody ({ city, state, isSeller }) {
  return (
    <>
      <TextMd fontWeight='bold' color='primary' style={styles.title}>
        Detail Person
      </TextMd>
      <View style={styles['content-box']}>
        <View>
          <TextMd style={styles.space} align='center' fontWeight='bold'>
            City
          </TextMd>
          <TextMd align='center'>{city}</TextMd>
        </View>
        <View>
          <TextMd style={styles.space} align='center' fontWeight='bold'>
            State
          </TextMd>
          <TextMd align='center'>{state?.displayName}</TextMd>
        </View>
        <View>
          <TextMd style={styles.space} align='center' fontWeight='bold'>
            ShortCode
          </TextMd>
          <TextMd align='center'>{state?.shortCode}</TextMd>
        </View>
        <View>
          <TextMd style={styles.space} align='center' fontWeight='bold'>
            Seller
          </TextMd>
          <TextMd align='center'>{isSeller ? '🟢' : '🔴'}</TextMd>
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
