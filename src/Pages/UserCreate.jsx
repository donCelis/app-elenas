import { StyleSheet, View } from 'react-native'
import TextMd from '../components/common/TextMd'

export default function UserCreate () {
  return (
    <>
      <View style={styles.container}>
        <TextMd>Create</TextMd>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0'
  }
})
