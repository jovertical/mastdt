import * as React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import THEME from '@constants/theme';

/**
 * @param {TextInputProps} props
 */
export default function XTextInput({ style, ...props }) {
  return (
    <React.Fragment>
      <TextInput
        style={{ ...styles.input, ...style }}
        placeholderTextColor={THEME.colors['gray-500']}
        {...props}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: THEME.colors['gray-100'],
    height: 60,
    padding: 15,
    fontFamily: 'inter-medium',
    fontSize: 14,
  },
});
