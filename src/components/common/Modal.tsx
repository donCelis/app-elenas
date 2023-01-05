import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { theme } from '../../theme'

export default function LoadingModal () {
  return (
    <>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size='large' color={theme.colors.primary} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    width: 200,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },

  modalText: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 17,
    marginLeft: 15
  }
})
