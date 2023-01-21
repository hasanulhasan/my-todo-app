import { FlatList } from 'react-native'
import React from 'react'
import ListItem from '../ListItem'

export default function PlaceList({ placeList }) {
  return (
    <FlatList
      style={{ width: "100%" }}
      data={placeList}
      renderItem={info => <ListItem
        placeName={info.item.value}
        onItemPress={() => alert(info.item.value)}></ListItem>} />
  )
}