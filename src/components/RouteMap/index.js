import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const RouteMap = props => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };
  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCS7l7QlVUmWVyxk8Sw4BlHtK1LI755Gjo';
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
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="hotred"
      />
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};
export default RouteMap;
