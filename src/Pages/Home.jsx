import { StatusBar } from 'expo-status-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { screenOptions } from '../theme'

/* Components */
import UserCreate from './UserCreate'
import UserList from './UserList'
import TabBarIcon from '../components/common/TabBarIcon'

const Tab = createBottomTabNavigator()

export default function Home () {
  return (
    <>
      <StatusBar style='light' />
      <Tab.Navigator initialRouteName='userlist' screenOptions={screenOptions}>
        <Tab.Screen
          name='userlist'
          options={{
            title: 'User List',
            tabBarIcon: (props) => <TabBarIcon icon='list' {...props} />
          }}
          component={UserList}
        />
        <Tab.Screen
          name='newuser'
          component={UserCreate}
          options={{
            title: 'New User',
            tabBarIcon: (props) => <TabBarIcon icon='person-add' {...props} />
          }}
        />
      </Tab.Navigator>
    </>
  )
}
