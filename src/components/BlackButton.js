import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BlackButton = ({title, onPress, style = {}}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{...styles.blackButton, ...style}}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BlackButton;

const styles = StyleSheet.create({
  blackButton: {
    height: 45,
    width: 180,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
