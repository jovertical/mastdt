import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import random from 'lodash/random'
import { colors } from '@constants/theme'
import Button from '@components/Button'
import Text from '@components/Text'
import useTimer from '@hooks/useTimer'

export default function ReactionTimeTaskScreen() {
  const clock = useTimer()

  React.useEffect(() => {
    clock.start()
  }, [])

  return (
    <View style={styles.root}>
      <Text>{clock.time}</Text>
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

  object: {
    width: 40,
    height: 40,
    marginLeft: -20,
    marginTop: -20,
    backgroundColor: colors['blue-500'],
    borderRadius: 100,
    position: 'absolute',
  },
})
