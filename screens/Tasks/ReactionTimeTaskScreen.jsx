import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { colors } from '@constants/theme'
import useTask from '@hooks/useTask'

export default function ReactionTimeTaskScreen(props) {
  const task = useTask({ items, screenProps: props })

  function handlePressed() {
    task.answer()
  }

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.cell,
          {
            top: `${20 * task.currentItem.y}%`,
            left: `${20 * task.currentItem.x}%`,
          },
        ]}
      >
        <TouchableOpacity style={[styles.object]} onPress={handlePressed} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    position: 'relative',
  },

  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '20%',
    height: '20%',
  },

  object: {
    width: 40,
    height: 40,
    backgroundColor: colors['blue-500'],
    borderRadius: 100,
  },
})

const items = [
  { x: 3, y: 4 },
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  // { x: 1, y: 4 },
  // { x: 2, y: 1 },
  // { x: 3, y: 2 },
  // { x: 1, y: 0 },
  // { x: 1, y: 1 },
  // { x: 0, y: 4 },
  // { x: 2, y: 3 },
  // { x: 0, y: 3 },
  // { x: 4, y: 3 },
  // { x: 2, y: 0 },
  // { x: 0, y: 2 },
  // { x: 4, y: 4 },
  // { x: 4, y: 2 },
  // { x: 3, y: 1 },
  // { x: 4, y: 0 },
  // { x: 2, y: 4 },
  // { x: 3, y: 3 },
  // { x: 1, y: 3 },
  // { x: 3, y: 0 },
  // { x: 2, y: 2 },
  // { x: 4, y: 1 },
  // { x: 0, y: 1 },
]
