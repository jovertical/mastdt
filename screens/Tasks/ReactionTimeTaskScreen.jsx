import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import random from 'lodash/random'
import { colors } from '@constants/theme'
import useTimer from '@hooks/useTimer'

export default function ReactionTimeTaskScreen() {
  const clock = useTimer()
  const [entries, setEntries] = React.useState([])
  const [position, setPosition] = React.useState({ x: 0, y: 1 })

  function handlePress() {
    setEntries((prevEntries) => prevEntries.concat(clock.time))

    clock.reset()
  }

  React.useEffect(() => {
    clock.start()

    // setPosition({
    //   x: random(1, 5),
    //   y: random(1, 5),
    // })
  }, [entries])

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={[
          styles.object,
          {
            left: `${20 * position.x}%`,
            top: `${20 * position.y}%`,
          },
        ]}
        onPress={handlePress}
      />
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
    borderWidth: 1,
  },

  object: {
    width: 40,
    height: 40,
    backgroundColor: colors['blue-500'],
    borderRadius: 100,
    position: 'absolute',
  },
})
