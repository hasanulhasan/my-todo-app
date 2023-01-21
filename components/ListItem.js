import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function ListItem(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onItemPress}>
      <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: '#eee',
    margin: 5,
    fontSize: 35,
    fontWeight: 'bolder'
  }
})