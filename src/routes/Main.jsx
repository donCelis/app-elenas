import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PATH_PAGE } from '../paths'
import { screenOptions } from '../theme'

/* Components */
import LogIn from '../pages/LogIn'
import UserDetail from '../pages/UserDetail'
import Home from './Home'

const Stack = createNativeStackNavigator()

export default function Main () {
  return (
    <Stack.Navigator
      initialRouteName='signin'
      screenOptions={{ headerShown: false, ...screenOptions }}
    >
      <Stack.Screen
        name='signin'
        component={LogIn}
        options={{ title: 'Sign In' }}
      />
      <Stack.Screen
        name={PATH_PAGE.home}
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name='detail'
        component={UserDetail}
        options={({ route }) => ({
          title: route.params.screen,
          headerShown: true
        })}
      />
    </Stack.Navigator>
  )
}
