import { StyleSheet, View } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import { theme } from '../theme'

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()

  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]
  return (
    <Link to={to}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

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
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  text: {
    color: theme.appBar.secondaryText,
    padding: 10
  },
  active: {
    color: theme.appBar.primaryText
  }
})
