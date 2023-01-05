import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../theme'

export default function TabBarIcon ({ focused, icon }) {
  const currentColor = focused ? 'primary' : 'secondary'
  const currentIcon = focused ? icon : `${icon}-outline`
  return (
    <Ionicons
      name={currentIcon}
      size={24}
      color={theme?.colors[currentColor]}
    />
  )
}
