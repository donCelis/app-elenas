import { SafeAreaView, StyleSheet } from 'react-native'
import { Route, Routes } from 'react-router-native'

/* Components */
import AppBar from './common/AppBar'
import UsersList from '../Pages/UsersList'
import LogInPage from '../Pages/LogIn'

export default function Main () {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/signin' element={<LogInPage />} />
      </Routes>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
