import { Pressable, StyleSheet } from 'react-native'
import { useActions } from '../../overmind'

import TabBarIcon from './TabBarIcon'

export default function Favs ({ id, isFav }) {
  const { users: { editUserFavs } } = useActions()

  const handleChangeFavs = () => {
    editUserFavs({ id, isFav })
  }

  return (
    <Pressable style={styles.fav} onPress={handleChangeFavs}>
      <TabBarIcon icon='heart' focused={isFav} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  fav: {
    padding: 15
  }
})
