import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 10
  },
  'content-box': {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default function VisualPerson ({ age, hair, eyeColor }) {
  return (
    <>
      <StyledText
        fontWeight='bold'
        color='primary'
        style={styles.title}
      >
        Style Person
      </StyledText>
      <View style={styles['content-box']}>
        <View>
          <StyledText align='center' fontWeight='bold'>
            Age
          </StyledText>
          <StyledText align='center'>{age}</StyledText>
        </View>
        <View>
          <StyledText align='center' fontWeight='bold'>
            Hair Color
          </StyledText>
          <StyledText align='center'>{hair.color}</StyledText>
        </View>
        <View>
          <StyledText align='center' fontWeight='bold'>
            Hair Type
          </StyledText>
          <StyledText align='center'>{hair.type}</StyledText>
        </View>
        <View>
          <StyledText align='center' fontWeight='bold'>
            Eye Color
          </StyledText>
          <StyledText align='center'>{eyeColor}</StyledText>
        </View>
      </View>
    </>
  )
}
