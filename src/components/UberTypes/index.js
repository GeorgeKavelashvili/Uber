import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import UberTypesRow from '../UberTypesRow';
import typesData from '../../assets/data/types';
const UberTypes = props => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map(type => (
        <UberTypesRow type={type} />
      ))}
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
          borderRadius: 40,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};
export default UberTypes;
