import { View, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
// import { myImage } from '/assets/dhaka.jpg'

export default function InputPlace({ inputValue, setInputValue, placeList, setPlaceList }) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputStyle}
        placeholder='Add something'
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      ></TextInput>
      <Button
        title="Add"
        onPress={() => {
          if (inputValue !== '') {
            setPlaceList([...placeList, {
              key: Math.random().toString(),
              value: inputValue,
              img: 'https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?width=1366&height=768&xhint=1477&yhint=1081&crop=true'
            }])
          }
          setInputValue('')
        }}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  inputView: {
    padding: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputStyle: {
    width: "80%",
    borderBottomWidth: 1,
    borderColor: 'green',
    padding: 7
  }
});