import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import ListItem from './components/ListItem';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [placeList, setPlaceList] = useState([]);
  console.log(inputValue)
  console.log(placeList)
  // const list = placeList.map((item, i) => {
  //   return (
  //     <ListItem
  //       key={i}
  //       placeName={item}></ListItem>
  //   )
  // })

  return (
    <View style={styles.container}>
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
              setPlaceList([...placeList, inputValue])
            }
          }}></Button>
      </View>
      <View>
        {/* {list} */}
        {
          placeList.map((item, i) =>
            <ListItem
              key={i}
              placeName={item}></ListItem>)

        }
        {/* <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
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
