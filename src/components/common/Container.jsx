import { StyleSheet, View } from 'react-native'

export default function Container ({ children }) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
