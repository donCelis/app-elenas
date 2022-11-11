import { StyleSheet, View } from 'react-native'
import { theme } from '../../theme'

/* components */
import AppBarTab from './AppBarTab'

export default function AppBar () {
  return (
    <View style={styles.appBar}>
      <AppBarTab to='/'>Users</AppBarTab>
      <AppBarTab to='/signin'>Sign In</AppBarTab>
    </View>
  )
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.appBar.primary,
    padding: 10
  }
})
