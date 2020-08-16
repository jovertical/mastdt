import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '@components/Button'
import Text from '@components/Text'

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text weight="semibold" size="xl">
        Mobile Application Screening Tool
      </Text>

      <Text weight="semibold" size="xl">
        for Dyscalculic Tendencies
      </Text>

      <Button
        style={{ marginTop: 40 }}
        title="Create Student Account"
        onPress={() => navigation.navigate('Register')}
      />
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
