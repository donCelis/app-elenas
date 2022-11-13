import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Components */
import Container from './common/Container'
import LogIn from '../pages/LogIn'
import UsersList from '../pages/UsersList'
import UserDetail from '../pages/UserDetail'
import UserCreate from '../pages/UserCreate'
import TabsNavigator from './TabsNavigator'

const Stack = createNativeStackNavigator()

export default function Main () {
  return (
    <Container active>
      <Stack.Navigator initialRouteName='signin'>
        <Stack.Screen
          name='signin'
          component={LogIn}
          options={{
            title: 'Sign In',
            headerShown: false
          }}
        />
        <Stack.Screen
          name='main'
          component={TabsNavigator}
          options={{ title: 'Users List' }}
        />
        {/* <Stack.Screen
          name='newuser'
          component={UserCreate}
          options={{ title: 'New User' }}
        /> */}
        <Stack.Screen
          name='detail'
          component={UserDetail}
          /* options={{ title: 'Detail' }} */
          options={({ route }) => ({ title: route.params.screen })}
        />
      </Stack.Navigator>
    </Container>
  )
}
