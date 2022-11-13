import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../../theme'
import { createAvatar } from '../../utils/createAvatar'

export default function Avatar ({ str, size }) {
  const { name } = createAvatar(str)
  const stylesAvatar = [
    styles.circle,
    size && {
      width: size,
      height: size
    }
  ]
  return (
    <View style={stylesAvatar}>
      <Text style={styles.letter}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary
  },
  letter: {
    fontSize: 20,
    textAlign: 'center',
    color: theme.colors.whitePure,
    fontWeight: 'bold'
  }
})
