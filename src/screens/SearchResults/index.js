import React from 'react';
import {View, Text} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
const SearchResults = props => {
  return (
    <View style={{display: 'flex'}}>
      <View style={{height: 440}}>
        <RouteMap />
      </View>
      <View style={{height: 500}}>
        <UberTypes />
      </View>
    </View>
  );
};
export default SearchResults;
