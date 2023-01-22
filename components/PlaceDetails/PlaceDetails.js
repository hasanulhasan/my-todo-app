import { View, Text, Modal, Button, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function PlaceDetails({ selectedPlace, handleHideModal, handleDeleteItems }) {
  return (
    <Modal>
      <View>
        <Text style={styles.listName}>{selectedPlace.value}</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: selectedPlace.img,
          }}
        ></Image>
        <View>
          <Button title='Delete' color='red' onPress={() => handleDeleteItems(selectedPlace.key)}>X</Button>
          <Button title='Close'
            onPress={() => handleHideModal()}>X</Button>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  logo: {
    width: 66,
    height: 58,
  },
  listName: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bolder',
    padding: 10
  }
});