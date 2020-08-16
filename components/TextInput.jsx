import * as React from 'react'
import { TextInput, StyleSheet, TextInputProps } from 'react-native'
import { colors } from '@constants/theme'

/**
 * @param {TextInputProps} props
 */
export default function XTextInput({ style, ...props }) {
  return (
    <React.Fragment>
      <TextInput
        style={{ ...styles.input, ...style }}
        placeholderTextColor={colors['gray-500']}
        {...props}
      />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors['gray-100'],
    height: 60,
    padding: 15,
    fontFamily: 'inter-medium',
    fontSize: 14,
  },
})
