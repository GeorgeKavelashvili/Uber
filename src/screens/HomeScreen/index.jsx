import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearchComponent from '../../components/HomeSearchComponent';
const HomeScreen = props => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 430}}>
        <HomeMap />
      </View>
      {/* Covid message */}
      <CovidMessage />
      {/* Bottom Component */}
      <HomeSearchComponent />
    </View>
  );
};
export default HomeScreen;
