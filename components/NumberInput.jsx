import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import range from 'lodash/range'
import Text from '@components/Text'
import { colors } from '@constants/theme'

export default function NumberInput({ numbers, onReset, onSubmit, onAdd }) {
  return (
    <View style={styles.root}>
      {numbers.length > 0 && (
        <View style={styles.valueContainer}>
          <View style={styles.value}>
            <Text size="xl" weight="semibold">
              {numbers.join('')}
            </Text>
          </View>
        </View>
      )}

      <View style={styles.pad}>
        {range(0, 10).map((number) => (
          <TouchableOpacity
            key={number}
            style={[
              styles.button,
              styles.number,
              numbers.includes(number) && styles.selected,
            ]}
            onPress={() => onAdd(number)}
          >
            <Text size="lg" weight="semibold">
              {number}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[styles.button, styles.reset]}
          onPress={onReset}
        >
          <Text size="lg" weight="semibold" color="white">
            &times;
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.next]}
          onPress={onSubmit}
        >
          <Text size="lg" weight="semibold" color="white">
            &gt;
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },

  valueContainer: {
    position: 'absolute',
    top: -100,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    marginRight: 3,
  },

  value: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors['gray-500'],
  },

  pad: {
    flexDirection: 'row',
  },

  button: {
    marginHorizontal: 3,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },

  number: {
    paddingHorizontal: 14,
    borderWidth: 4,
    borderColor: colors['indigo-700'],
  },

  selected: {
    backgroundColor: colors['pink-500'],
  },

  reset: {
    backgroundColor: colors['red-500'],
  },

  next: {
    backgroundColor: colors['indigo-700'],
  },
})
