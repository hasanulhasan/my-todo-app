import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'

export default function ListItem(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onItemPress}>
      <View style={styles.listItem}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.img,
          }}
        ></Image>
        <Text style={styles.listName}>{props.placeName}</Text>
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
    fontWeight: 'bolder',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  listName: {
    paddingLeft: 15,
    fontSize: 35,
    fontWeight: 'bolder'
  }
})
