import * as React from 'react';
import { View, Text } from 'react-native';

export default function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Please Wait</Text>
    </View>
  );
}
