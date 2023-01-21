import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import PlaceList from './components/PlaceList/PlaceList';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [placeList, setPlaceList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectedPlace = key => {
    const place = placeList.find(place => place.key === key)
    setSelectedPlace(place);
  }

  return (
    <View style={styles.container}>
      {
        selectedPlace && <PlaceDetails selectedPlace={selectedPlace} />
      }
      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeList={placeList}
        setPlaceList={setPlaceList}
      />
      <PlaceList placeList={placeList} handleSelectedPlace={handleSelectedPlace} />
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
  }
});
