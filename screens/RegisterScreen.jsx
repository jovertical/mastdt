import * as React from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native'
import includes from 'lodash/includes'
import pick from 'lodash/pick'
import range from 'lodash/range'
import { getRepository } from 'typeorm/browser'

import Button from '@components/Button'
import Picker from '@components/Picker'
import PickerItem from '@components/PickerItem'
import Text from '@components/Text'
import TextInput from '@components/TextInput'
import connect from '@database'
import useDisableBack from '@hooks/useDisableBack'
import useForm from '@hooks/useForm'
import User from '@models/User'

export default function RegisterScreen({ navigation }) {
  useDisableBack()

  const { values, onChange } = useForm({
    first_name: '',
    middle_name: '',
    last_name: '',
    gender: null,
    age: null,
    grade: null,

    // first_name: 'John',
    // middle_name: '',
    // last_name: 'Doe',
    // gender: 'male',
    // age: 7,
    // grade: 2,
  })

  const [first, setFirst] = React.useState(true)

  function handleNext() {
    if (values.first_name === '' || values.last_name === '') {
      return ToastAndroid.show(`What's your name?`, ToastAndroid.SHORT)
    }

    setFirst(false)
  }

  function handleBack() {
    setFirst(true)
  }

  function handleGenderChanged(value) {
    if (value !== null) {
      onChange('gender', value)
    }
  }

  function handleAgeChanged(value) {
    if (value !== null) {
      onChange('age', value)
    }
  }

  function handleGradeChanged(value) {
    if (value !== null) {
      onChange('grade', value)
    }
  }

  async function storeUser(attributes) {
    await connect()

    const user = new User()

    user.first_name = attributes.first_name
    user.middle_name = attributes.middle_name
    user.last_name = attributes.last_name
    user.gender = attributes.gender
    user.age = attributes.age
    user.grade = attributes.grade

    const userRepository = getRepository(User)
    return userRepository.save(user)
  }

  async function handleSubmit() {
    if (includes(pick(values, ['gender', 'age', 'grade']), null)) {
      return ToastAndroid.show(
        `Let us know these details first :)`,
        ToastAndroid.SHORT,
      )
    }

    try {
      const user = await storeUser(values)

      navigation.navigate('Home')
      ToastAndroid.show(`Welcome ${user.first_name}!`, ToastAndroid.SHORT)
    } catch (error) {
      ToastAndroid.show(
        error?.message || 'Something went wrong',
        ToastAndroid.SHORT,
      )
    }
  }

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
                  <PickerItem label="Female" value="female" />
                  <PickerItem label="Male" value="male" />
                </Picker>

                <Picker
                  placeholder="Age"
                  style={styles.item}
                  selectedValue={values.age}
                  onValueChange={handleAgeChanged}
                >
                  <PickerItem label="Age" value={null} />
                  {range(7, 11).map((age) => (
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
                  {range(2, 5).map((grade) => (
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
  )
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
})
