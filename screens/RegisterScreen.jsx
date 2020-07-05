import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Button from '@components/Button';
import Text from '@components/Text';
import TextInput from '@components/TextInput';
import useDisableBack from '@hooks/useDisableBack';
import useForm from '@hooks/useForm';

export default function RegisterScreen() {
  useDisableBack();

  const { values, onChange } = useForm({
    first_name: '',
    middle_name: '',
    last_name: '',
    gender: '',
    age: 0,
    grade: 0,
  });

  const [first, setFirst] = React.useState(true);

  function handleNext() {
    setFirst(false);
  }

  function handleBack() {
    setFirst(true);
  }

  function handleSubmit() {}

  return (
    <View style={styles.root}>
      <Text weight="semibold" size="lg">
        Create Student Account
      </Text>

      <View style={styles.form}>
        {first ? (
          <React.Fragment>
            <View style={styles.formBlock()}>
              <TextInput
                style={styles.item}
                placeholder="First Name"
                value={values?.first_name}
                onChangeText={(value) => onChange('first_name', value)}
              />

              <TextInput
                style={styles.item}
                placeholder="Last Name"
                value={values?.last_name}
                onChangeText={(value) => onChange('last_name', value)}
              />
            </View>

            <View style={styles.formBlock({ marginTop: 20 })}>
              <TextInput
                style={styles.item}
                placeholder="Middle Name"
                value={values?.middle_name}
                onChangeText={(value) => onChange('middle_name', value)}
              />
            </View>

            <View style={styles.actions}>
              <Button title="Next" onPress={handleNext} />
            </View>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <View style={styles.formBlock()}>
              <Picker
                selectedValue={values.age}
                style={{ height: 50, width: 100 }}
                onValueChange={(value) => onChange('age', value)}
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>

            <View style={styles.actions}>
              <Text style={{ flexGrow: 1 }} onPress={handleBack}>
                Previous Step
              </Text>
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          </React.Fragment>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  form: {
    width: '75%',
    marginTop: 30,
  },

  formBlock: (style) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -30,
    ...style,
  }),

  item: {
    flex: 1,
    marginHorizontal: 30,
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
});
