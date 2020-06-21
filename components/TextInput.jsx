import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function XTextInput({ style, ...props }) {
  return (
    <React.Fragment>
      <TextInput style={{ ...styles.input, ...style }} {...props} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#E9E9E9',
    padding: 15,
    fontFamily: 'inter-medium',
    fontSize: 14,
  },
});
