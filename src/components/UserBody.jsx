import { StyleSheet, View } from 'react-native'
import { theme } from '../theme'
import StyledText from './StyledText'

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

export default function UserBody ({ age, hair, eyeColor }) {
  return (
    <>
      <StyledText fontWeight='bold' color='primary' style={styles.title}>
        Style Person
      </StyledText>
      <View style={styles['content-box']}>
        <View>
          <StyledText style={styles.space} align='center' fontWeight='bold'>
            Age
          </StyledText>
          <StyledText align='center'>{age}</StyledText>
        </View>
        <View>
          <StyledText style={styles.space} align='center' fontWeight='bold'>
            Hair Color
          </StyledText>
          <StyledText align='center'>{hair.color}</StyledText>
        </View>
        <View>
          <StyledText style={styles.space} align='center' fontWeight='bold'>
            Hair Type
          </StyledText>
          <StyledText align='center'>{hair.type}</StyledText>
        </View>
        <View>
          <StyledText style={styles.space} align='center' fontWeight='bold'>
            Eye Color
          </StyledText>
          <StyledText align='center'>{eyeColor}</StyledText>
        </View>
      </View>
    </>
  )
}
