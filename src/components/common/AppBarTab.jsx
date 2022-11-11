import { StyleSheet } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import { theme } from '../../theme'

/* components */
import StyledText from './StyledText'

export default function AppBarTab ({ children, to }) {
  const { pathname } = useLocation()

  const active = pathname === to

  const textStyles = [styles.text, active && styles.active]
  return (
    <Link to={to}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.secondaryText,
    padding: 10
  },
  active: {
    color: theme.appBar.primaryText
  }
})
