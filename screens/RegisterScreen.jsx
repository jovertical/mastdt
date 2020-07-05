import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import range from 'lodash/range';
import Button from '@components/Button';
import Picker from '@components/Picker';
import PickerItem from '@components/PickerItem';
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
    gender: null,
    age: null,
    grade: null,
  });

  const [first, setFirst] = React.useState(true);

  function handleNext() {
    setFirst(false);
  }

  function handleBack() {
    setFirst(true);
  }

  function handleGenderChanged(value) {
    if (value !== null) {
      onChange('gender', value);
    }
  }

  function handleAgeChanged(value) {
    if (value !== null) {
      onChange('age', value);
    }
  }

  function handleGradeChanged(value) {
    if (value !== null) {
      onChange('grade', value);
    }
  }

  function handleSubmit() {}

  React.useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <Text weight="semibold" size="lg">
          Create Student Account
        </Text>

        <View style={styles.form}>
          {first ? (
            <React.Fragment>
              <View style={styles.formBlock}>
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

              <View style={{ ...styles.formBlock, marginTop: 20 }}>
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
              <View style={styles.formBlock}>
                <Picker
                  placeholder="Gender"
                  style={styles.item}
                  selectedValue={values.gender}
                  onValueChange={handleGenderChanged}
                >
                  <PickerItem label="Gender" value={null} />
                  <PickerItem label="Female" value={'female'} />
                  <PickerItem label="Male" value={'gender'} />
                </Picker>

                <Picker
                  placeholder="Age"
                  style={styles.item}
                  selectedValue={values.age}
                  onValueChange={handleAgeChanged}
                >
                  <PickerItem label="Age" value={null} />
                  {range(4, 10).map((age) => (
                    <PickerItem
                      key={`age-${age}`}
                      label={`${age} Years Old`}
                      value={age}
                    />
                  ))}
                </Picker>
              </View>

              <View style={{ ...styles.formBlock, marginTop: 20 }}>
                <Picker
                  style={styles.item}
                  selectedValue={values.grade}
                  onValueChange={handleGradeChanged}
                >
                  <PickerItem label="Grade Level" value={null} />
                  {range(1, 5).map((grade) => (
                    <PickerItem
                      key={`grade-level-${grade}`}
                      label={`Grade ${grade}`}
                      value={grade}
                    />
                  ))}
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
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  body: {
    width: '75%',
  },

  form: {
    marginTop: 30,
  },

  formBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -30,
  },

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
