import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screenOptions } from '../theme'

import { PATH_AUTH, PATH_PAGE } from './paths'
/* Components */
import LogIn from '../pages/LogIn'
import Home from './Home'
import UserDetail from '../pages/UserDetail'
import UpdateUser from '../pages/UpdateUser'
import InitialScreen from '../components/InitialScreen'

const Stack = createNativeStackNavigator()

export default function Main (): JSX.Element {
  return (
    <>
      <StatusBar style='dark' />
      <Stack.Navigator
        initialRouteName={PATH_AUTH.signIn}
        screenOptions={{ headerShown: false, ...screenOptions }}
      >
        <Stack.Screen name='screen' component={InitialScreen} />
        <Stack.Screen
          name={PATH_AUTH.signIn}
          component={LogIn}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name={PATH_PAGE.home}
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Group screenOptions={{ headerShown: true }}>
          <Stack.Screen
            options={{ title: 'Detail' }}
            name={PATH_PAGE.detail}
            component={UserDetail}
          />
          <Stack.Screen
            name={PATH_PAGE.update}
            component={UpdateUser}
            options={{
              presentation: 'modal',
              title: 'Edit'
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  )
}
