import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView, ScrollView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
const DestinationSearch = props => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  useEffect(() => {
    console.warn('useEffect is called');
    if (originPlace && destinationPlace) {
      console.warn('redirect to result');
    }
  }, [originPlace, destinationPlace]);
  return (
    // <ScrollView>
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBVX5o9bLLHAsWDZxAd7EgYGNlNyHCGt2k',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          // onFail={error => console.error(error)}
          fetchDetails
          query={{
            key: 'AIzaSyBVX5o9bLLHAsWDZxAd7EgYGNlNyHCGt2k',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
