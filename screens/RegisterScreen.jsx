import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@components/Button';
import Text from '@components/Text';
import TextInput from '@components/TextInput';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text weight="semibold" size="lg">
        Create Student Account
      </Text>

      <View
        style={{
          width: '75%',
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={{ width: '45%' }} placeholder="First Name" />
          <TextInput style={{ width: '45%' }} placeholder="Last Name" />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TextInput style={{ width: '100%' }} placeholder="Middle Name" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 30,
          }}
        >
          <Button title="Submit" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
