import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@components/Text';
import { colors } from '@constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <Text weight="semibold" size="xl">
        Tasks
      </Text>

      <View style={styles.taskList}>
        {TASKS.map((task, key) => (
          <TouchableOpacity key={`task-${key}`} style={styles.task}>
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
    backgroundColor: colors['blue-500'],
    borderWidth: 0,
  },
});

const TASKS = [
  {
    id: 1,
    name: 'Task 1',
    cleared: false,
    locked: false,
  },

  {
    id: 2,
    name: 'Task 2',
    cleared: false,
    locked: true,
  },

  {
    id: 3,
    name: 'Task 3',
    cleared: false,
    locked: true,
  },

  {
    id: 4,
    name: 'Task 4',
    cleared: false,
    locked: true,
  },

  {
    id: 5,
    name: 'Task 5',
    cleared: false,
    locked: true,
  },

  {
    id: 6,
    name: 'Task 6',
    cleared: false,
    locked: true,
  },

  {
    id: 7,
    name: 'Task 7',
    cleared: false,
    locked: true,
  },

  {
    id: 8,
    name: 'Task 8',
    cleared: false,
    locked: true,
  },

  {
    id: 9,
    name: 'Task 9',
    cleared: false,
    locked: true,
  },

  {
    id: 10,
    name: 'Task 10',
    cleared: false,
    locked: true,
  },
];
