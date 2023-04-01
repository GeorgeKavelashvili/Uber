import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
import PlaceRow from './PlaceRow';
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
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 0,
              left: 10,
              right: 10,
            },
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyACWLYA6ckG_n-O-N9XQYAdwrcg8BaTEGM',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 55,
              left: 10,
              right: 10,
            },
            separator: styles.separator,
          }}
          // onFail={error => console.error(error)}
          fetchDetails
          query={{
            key: 'AIzaSyBVX5o9bLLHAsWDZxAd7EgYGNlNyHCGt2k',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />

        <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
