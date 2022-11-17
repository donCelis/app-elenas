import { View, Modal, StyleSheet, Text, ActivityIndicator } from 'react-native'

export default function LoadingModal ({ modalVisible, task = '', title }) {
  return (
    <Modal
      animationType='fade'
      transparent
      visible={modalVisible}
      statusBarTranslucent
    >

      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size='large' color='red' />
          {task
            ? <Text style={styles.modalText}>{task}</Text>
            : <Text style={styles.modalText}>Loading.. {title}</Text>}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'

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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5

  },

  modalText: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 17,
    marginLeft: 15
  }
})
