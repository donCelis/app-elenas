import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'
import { screenOptions } from '../theme'

/* Components */
import UserCreate from './UserCreate'
import UsersList from './UsersList'

const Tab = createBottomTabNavigator()

export default function Home () {
  return (
    <>
      <StatusBar style='light' />
      <Tab.Navigator
        initialRouteName='userslist'
        screenOptions={screenOptions}
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
    </>
  )
}
