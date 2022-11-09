import { View } from 'react-native'
import StyledText from './StyledText'

export default function VisualPerson ({ age, hair, eyeColor }) {
  return (
    <>
      <StyledText
        fontWeight='bold'
        color='primary'
        style={{ textAlign: 'center', marginVertical: 10 }}
      >
        Style Person
      </StyledText>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
