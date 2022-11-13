import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Container ({ children, theme, style = {}, active = false }) {
  return (
    <SafeAreaView style={[styles.inner, style]}>
      {active && <StatusBar style={theme} backgroundColor='red' />}
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inner: {
    flex: 1
  }
})
