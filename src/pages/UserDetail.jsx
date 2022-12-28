import { StyleSheet, SafeAreaView } from 'react-native'
import { useActions } from '../overmind'

/* Components */
import Profile from '../components/Profile'
import { PATH_PAGE } from '../routes/paths'
import Button from '../components/common/Button'
// import LoadingModal from '../components/common/Modal'

export default function UserDetail ({ route, navigation: { navigate } }) {
  const { users } = useActions()
  const id = route?.params.screen

  const user = users.filterUser(id)

  const handleEdit = () => {
    navigate(PATH_PAGE.update, { ...user })
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* {loading && <LoadingModal />}
      {!loading && (
        <Profile isEdit {...user}>
          <Button title='Edit' onPress={handleEdit} />
        </Profile>
      )} */}
      <Profile isEdit {...user}>
        <Button title='Edit' onPress={handleEdit} />
      </Profile>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
