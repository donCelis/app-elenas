import { SafeAreaView, StyleSheet } from 'react-native'
import { Route, Routes } from 'react-router-native'

/* Components */
import AppBar from './common/AppBar'
import LogIn from '../pages/LogIn'
import UsersList from '../pages/UsersList'
import UserDetail from '../pages/UserDetail'
import UserCreate from '../pages/UserCreate'

export default function Main () {
  return (
    <SafeAreaView style={styles.container}>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/user' element={<AppBar />}>
          <Route path='list' element={<UsersList />} />
          <Route path=':userId' element={<UserDetail />} />
          <Route path='new' element={<UserCreate />} />
          <Route path=':userId/edit' element={<UserCreate />} />
        </Route>
      </Routes>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
