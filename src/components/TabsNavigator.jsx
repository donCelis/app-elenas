import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UsersList from '../pages/UsersList'

const Tab = createBottomTabNavigator()

export default function TabsNavigator () {
  return (
    <Tab.Navigator
      initialRouteName='userslist' screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerTintColor: 'red'
      }}
    >
      <Tab.Screen
        name='userslist'
        options={{ title: 'Users List', headerShown: false }}
        component={UsersList}
      />
    </Tab.Navigator>
  )
}
