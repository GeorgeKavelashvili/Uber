import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
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
          placeholder="Where From?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 0,
              left: 10,
              right: 10,
            },
            listView: {
              position: 'absolute',
              top: 105,
            },
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
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 55,
              left: 10,
              right: 10,
            },
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
