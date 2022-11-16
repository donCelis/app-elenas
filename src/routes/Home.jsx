import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { screenOptions } from '../theme'
import { PATH_PAGE } from './paths'

/* Components */
import TabBarIcon from '../components/common/TabBarIcon'
import UserList from '../pages/UserList'
import CreateUser from '../pages/CreateUser'
import ProfilePage from '../pages/ProfilePage'
import { StatusBar } from 'expo-status-bar'

const Tab = createBottomTabNavigator()

export default function Home () {
  return (
    <>
      <StatusBar style='light' />
      <Tab.Navigator initialRouteName='userlist' screenOptions={screenOptions}>
        <Tab.Screen
          name={PATH_PAGE.userList}
          options={{
            title: 'User List',
            tabBarIcon: (props) => <TabBarIcon icon='list' {...props} />
          }}
          component={UserList}
        />
        <Tab.Screen
          name={PATH_PAGE.addUser}
          component={CreateUser}
          options={{
            title: 'Add User',
            tabBarIcon: (props) => <TabBarIcon icon='add-circle' {...props} />
          }}
        />
        <Tab.Screen
          name={PATH_PAGE.profile}
          component={ProfilePage}
          options={{
            title: 'Profile',
            tabBarIcon: (props) => <TabBarIcon icon='person' {...props} />
          }}
        />
      </Tab.Navigator>
    </>
  )
}
