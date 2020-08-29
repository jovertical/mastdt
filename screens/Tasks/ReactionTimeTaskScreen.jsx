import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { getRepository } from 'typeorm/browser'

import Text from '@components/Text'
import { colors } from '@constants/theme'
import useTimer from '@hooks/useTimer'
import TaskActivity from '@models/TaskActivity'

export default function ReactionTimeTaskScreen({ navigation, route }) {
  const taskActivityRepository = getRepository(TaskActivity)
  const clock = useTimer()
  const [entries, setEntries] = React.useState([])
  const [position, setPosition] = React.useState(sequence[0])
  const [completed, setCompleted] = React.useState(false)

  function handlePressed() {
    setEntries((prevEntries) => prevEntries.concat(clock.time))

    clock.reset()
  }

  function completeTask() {
    return taskActivityRepository.update(route.params.activity, {
      cleared: true,
    })
  }

  React.useEffect(() => {
    if (!completed) {
      return
    }

    const timeout = setTimeout(async () => {
      await completeTask()

      navigation.navigate('Home', {
        refresh: true,
      })
    }, 3000)

    return () => clearTimeout(timeout)
  }, [completed])

  React.useEffect(() => {
    if (entries.length === sequence.length) {
      return setCompleted(true)
    }

    if (entries.length > 0) {
      setPosition(sequence[entries.length])
    }

    clock.start()
  }, [entries])

  return (
    <View style={styles.root}>
      {completed ? (
        <Text size="lg">Amazing!</Text>
      ) : (
        <View
          style={[
            styles.cell,
            {
              top: `${20 * position.y}%`,
              left: `${20 * position.x}%`,
            },
          ]}
        >
          <TouchableOpacity style={[styles.object]} onPress={handlePressed} />
        </View>
      )}
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

const sequence = [
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
