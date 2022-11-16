import { StatusBar } from 'expo-status-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { screenOptions } from '../theme'
import { PATH_AUTH, PATH_PAGE } from './paths'

/* Components */
import TabBarIcon from '../components/common/TabBarIcon'
import UserList from '../pages/UserList'
import CreateUser from '../pages/CreateUser'
import SignOut from '../pages/SignOut'

const Tab = createBottomTabNavigator()

export default function Home () {
  return (
    <>
      <StatusBar style='light' />
      <Tab.Navigator initialRouteName='userlist' screenOptions={screenOptions}>
        <Tab.Screen
          name={PATH_PAGE.userlist}
          options={{
            title: 'User List',
            tabBarIcon: (props) => <TabBarIcon icon='list' {...props} />
          }}
          component={UserList}
        />
        <Tab.Screen
          name={PATH_PAGE.adduser}
          component={CreateUser}
          options={{
            title: 'Add User',
            tabBarIcon: (props) => <TabBarIcon icon='person-add' {...props} />
          }}
        />
        <Tab.Screen
          name={PATH_AUTH.signOut}
          component={SignOut}
          options={{
            title: 'Sign Out',
            tabBarIcon: (props) => <TabBarIcon icon='exit-outline' {...props} />
          }}
        />
      </Tab.Navigator>
    </>
  )
}
