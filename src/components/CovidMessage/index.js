import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};
export default CovidMessage;
