import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';
const HomeMap = props => {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    if (type === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    }
  };

  return (
    <MapView
      style={{flex: 1, width: '100%', height: '100%'}}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.04321,
      }}
      provider={MapView.PROVIDER_GOOGLE}
      showsUserLocation
      userLocationAnnotationTitle="You are here"
      showsMyLocationButton
      apiKey="AIzaSyCixUtL9z5xGFLkhubTy0jNH7oXEa5SwbE">
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{width: 70, height: 70, resizeMode: 'contain'}}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};
export default HomeMap;
