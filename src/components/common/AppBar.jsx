import { StyleSheet, View } from 'react-native'
import { Outlet } from 'react-router-native'
import { theme } from '../../theme'

/* components */
import AppBarTab from './AppBarTab'

export default function AppBar () {
  return (
    <>
      <View style={styles.appBar}>
        <AppBarTab to='/'>Sign In</AppBarTab>
        <AppBarTab to='/user/list'>Users</AppBarTab>
      </View>
      <Outlet />
    </>
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
