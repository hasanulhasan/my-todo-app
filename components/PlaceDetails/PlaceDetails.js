import { View, Text, Modal, Button } from 'react-native'
import React from 'react'

export default function PlaceDetails({ selectedPlace }) {
  console.log(selectedPlace)
  return (
    <Modal>
      <View>
        <Text>{selectedPlace.value}</Text>
        <View>
          <Button title='Delete'>X</Button>
        </View>
      </View>
    </Modal>
  )
}