import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import NumberInput from '@components/NumberInput'
import { colors } from '@constants/theme'
import useNumberInput from '@hooks/useNumberInput'

export default function DotCountingTaskScreen() {
  const numberInput = useNumberInput()

  function handleSubmit() {
    alert('!')
  }

  return (
    <View style={styles.root}>
      <View style={styles.counter}></View>

      <NumberInput {...numberInput} onSubmit={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 30,
  },

  counter: {
    width: 250,
    height: 250,
    backgroundColor: colors['pink-100'],
    borderRadius: 250,
  },
})
