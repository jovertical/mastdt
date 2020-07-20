import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import Text from '@components/Text';
import { colors } from '@constants/theme';

export default function HomeScreen({ navigation }) {
  React.useEffect(() => {
    console.log();
  }, []);

  return (
    <View style={styles.root}>
      <Text weight="semibold" size="xl">
        Tasks
      </Text>

      <View style={styles.taskList}>
        {TASKS.map((task, key) => (
          <TouchableOpacity
            key={`task-${key}`}
            style={styles.task}
            disabled={task.locked || task.cleared}
            onPress={() =>
              navigation.navigate(
                upperFirst(camelCase(task.code.toLowerCase() + 'Task')),
              )
            }
          >
            <View style={[styles.body, task.locked && styles.locked]}>
              <Text
                weight="semibold"
                size="lg"
                color={task.locked ? 'white' : 'gray-500'}
              >
                {key + 1}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  taskList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    margin: -10,
  },

  task: {
    width: '20%',
    padding: 10,
  },

  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 35,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors['gray-500'],
  },

  locked: {
    backgroundColor: colors['gray-500'],
    borderWidth: 0,
  },
});

const TASKS = [
  {
    code: 'REACTION_TIME',
    title: 'Reaction Time',
    cleared: false,
    locked: false,
  },

  {
    code: 'DOT_COUNTING',
    title: 'Dot Counting',
    cleared: false,
    locked: true,
  },

  {
    code: 'DOT_COMPARISON',
    title: 'Dot Comparison',
    cleared: false,
    locked: true,
  },

  {
    code: 'SYMBOLIC_NUMBER_COMPARISON',
    title: 'Symbolic Number Comparison',
    cleared: false,
    locked: true,
  },

  {
    code: 'VERBAL_ARABIC_MATCHING',
    title: 'Verbal Arabic Matching',
    cleared: false,
    locked: true,
  },

  {
    code: 'MATCHING_OBJECTS',
    title: 'Matching Objects',
    cleared: false,
    locked: true,
  },

  {
    code: 'QUANTITY_ESTIMATION',
    title: 'Quantity Estimation',
    cleared: false,
    locked: true,
  },

  {
    code: 'NUMBER_LINE_ESTIMATION',
    title: 'Number Line Estimation',
    cleared: false,
    locked: true,
  },

  {
    code: 'ARITHMETIC_CALCULATION',
    title: 'Arithmetic Calculation',
    cleared: false,
    locked: true,
  },

  {
    code: 'VERBAL_SHORT_TERM_WORKING_MEMORY',
    title: 'Verbal Short-Term Working Memory',
    cleared: false,
    locked: true,
  },

  // {
  //   code: 'SPATIAL_SHORT_TERM_WORKING_MEMORY',
  //   title: 'Spatial Short-Term Working Memory',
  //   cleared: false,
  //   locked: true,
  // },
];
