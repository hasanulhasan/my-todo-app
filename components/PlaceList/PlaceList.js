import { FlatList } from 'react-native'
import React from 'react'
import ListItem from '../ListItem'

export default function PlaceList({ placeList, handleSelectedPlace }) {
  return (
    <FlatList
      style={{ width: "100%" }}
      data={placeList}
      renderItem={info => <ListItem
        placeName={info.item.value}
        img={info.item.img}
        onItemPress={() => handleSelectedPlace(info.item.key)}></ListItem>} />
  )
}