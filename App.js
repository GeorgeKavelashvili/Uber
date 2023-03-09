import React from 'react';
import {StatusBar} from 'react-native/types';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';
export default class App extends React.Component {
  render() {
    // return <DestinationSearch />;
    // return <HomeScreen />;
    return <SearchResults />;
  }
}
