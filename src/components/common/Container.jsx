import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Container ({ children, theme = 'dark', style = {}, activeBar = false }) {
  return (
    <SafeAreaView style={[styles.inner, style]}>
      {activeBar && <StatusBar style={theme} />}
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inner: {
    flex: 1
  }
})
