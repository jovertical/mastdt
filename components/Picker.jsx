import * as React from 'react'
import { StyleSheet, PickerProps, View } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { colors } from '@constants/theme'

/**
 * @param {PickerProps} props
 */
export default function XPicker({ style, ...props }) {
  return (
    <View style={{ ...styles.root, ...style }}>
      <Picker
        style={{
          ...styles.picker,
          color: props.selectedValue === null ? colors['gray-500'] : null,
        }}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 60,
    padding: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors['gray-100'],
  },

  picker: {
    fontFamily: 'inter-medium',
    fontSize: 14,
  },
})
