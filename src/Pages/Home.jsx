import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { theme } from '../theme'

/* Components */
import UserCreate from './UserCreate'
import UsersList from './UsersList'

const Tab = createBottomTabNavigator()

export default function Home () {
  return (
    <Tab.Navigator
      initialRouteName='userslist' screenOptions={{
        tabBarActiveTintColor: theme?.colors?.primary,
        tabBarInactiveTintColor: theme?.appBar?.secondaryText
      }}
    >
      <Tab.Screen
        name='userslist'
        options={{ title: 'Users List' }}
        component={UsersList}
      />
      <Tab.Screen
        name='newuser'
        component={UserCreate}
        options={{ title: 'New User' }}
      />
    </Tab.Navigator>
  )
}
