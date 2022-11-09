import { StyleSheet, Text, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import AppBar from './AppBar'
import UsersList from './UsersList'

export default function Main () {
  return (
    <View style={styles.general}>
      <AppBar />
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/signin' element={<Text>Works</Text>} />
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  general: {
    flex: 1
  }
})
