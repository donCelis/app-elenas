import { StyleSheet, SafeAreaView } from 'react-native'
import { useLinkTo, useRoute } from '@react-navigation/native'
import { useQuery } from '@apollo/client'

import { GET_SINGLE_USER } from '../graphql/queries'

/* Components */
import Profile from '../components/Profile'
import { PATH_PAGE } from '../routes/paths'
import Button from '../components/common/Button'

export default function UserDetail () {
  const { params: { screen } } = useRoute()
  const NumberId = Number(screen)

  const { data = {} } = useQuery(GET_SINGLE_USER, {
    variables: {
      ids: NumberId
    }
  })

  const user = data?.clientsSearch?.results[0] || {}

  const linkTo = useLinkTo()
  const handleEdit = () => {
    linkTo(`/${PATH_PAGE.update}/${user.id}`)
  }

  return (
    <SafeAreaView style={styles.container}>
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
