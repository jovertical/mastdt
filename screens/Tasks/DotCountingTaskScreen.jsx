import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import NumberInput from '@components/NumberInput'
import { colors } from '@constants/theme'
import useNumberInput from '@hooks/useNumberInput'
import useTask from '@hooks/useTask'

export default function DotCountingTaskScreen(props) {
  const task = useTask({ items, screenProps: props })
  const numberInput = useNumberInput()

  function handleSubmit() {
    if (numberInput.numbers.length === 0) {
      return
    }

    task.answer({
      correct: task.currentItem.length === numberInput.numbers.length,
    })

    numberInput.onReset()
  }

  return (
    <View style={styles.root}>
      <View style={styles.counter}>
        {task.currentItem.map((dot) => (
          <View
            key={`${dot.x}-${dot.y}`}
            style={[
              styles.cell,
              {
                top: `${10 * dot.y}%`,
                left: `${10 * dot.x}%`,
              },
            ]}
          >
            <View style={styles.dot} />
          </View>
        ))}
      </View>

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

  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '20%',
    height: '20%',
  },

  dot: {
    width: 25,
    height: 25,
    backgroundColor: colors['gray-700'],
    borderRadius: 100,
  },
})

const items = [
  [{ x: 4, y: 4 }],
  [
    { x: 6, y: 2 },
    { x: 3, y: 5 },
    { x: 5, y: 7 },
  ],
]
