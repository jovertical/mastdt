import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '~/components/Text'

export default function ScoreCardScreen({ navigation, route }) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home', {
        refresh: Math.random(1, 99),
      })
    }, 3000)

    return () => clearTimeout(timeout)
  }, [route?.params])

  return (
    <View style={styles.root}>
      <Text size="lg">Amazing!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
