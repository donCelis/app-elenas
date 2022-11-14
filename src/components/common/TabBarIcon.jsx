import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../theme'

export default function TabBarIcon ({ focused, icon }) {
  const currentColor = focused ? 'primary' : 'secondary'
  return (
    <Ionicons
      name={icon}
      size={24}
      color={theme?.colors[currentColor]}
    />
  )
}
