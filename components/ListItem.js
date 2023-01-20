import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ListItem(props) {
  return (
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
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