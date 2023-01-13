import { useCallback } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { useActions } from '../../overmind'

import TabBarIcon from './TabBarIcon'

function Favs ({ id, isFav }) {
  const { users: { editUserFavs } } = useActions()

  const handleChangeFavs = useCallback(
    () => editUserFavs({ id, isFav }),
    [isFav]
  )

  return (
    <Pressable style={styles.fav} onPress={handleChangeFavs}>
      <TabBarIcon icon='heart' focused={isFav} />
    </Pressable>
  )
}
export default Favs

const styles = StyleSheet.create({
  fav: {
    padding: 15
  }
})
