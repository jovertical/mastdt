import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@components/Text';
import { colors } from '@constants/theme';

export default function HomeScreen() {
  const [tasks, setTasks] = React.useState(TASKS);

  React.useEffect(() => {
    const loadTasks = async () => {};

    loadTasks();
  }, []);

  return (
    <View style={styles.root}>
      <Text weight="semibold" size="xl">
        Tasks
      </Text>

      <View style={styles.taskList}>
        {tasks.map((task, key) => (
          <TouchableOpacity key={`task-${key}`} style={styles.task}>
            <View
              style={[styles.taskBody, !task.unlocked && styles.taskLocked]}
            >
              <Text
                weight="semibold"
                size="lg"
                color={task.unlocked ? 'gray-500' : 'white'}
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

  taskBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 35,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors['gray-500'],
  },

  taskLocked: {
    backgroundColor: colors['blue-500'],
    borderWidth: 0,
  },
});

const TASKS = [
  {
    name: 'Task 1',
    complete: false,
    unlocked: true,
  },

  {
    name: 'Task 2',
    complete: false,
    unlocked: false,
  },

  {
    name: 'Task 3',
    complete: false,
    unlocked: false,
  },

  {
    name: 'Task 4',
    complete: false,
    unlocked: false,
  },

  {
    name: 'Task 5',
    complete: false,
    unlocked: false,
  },

  {
    name: 'Task 6',
    complete: false,
    unlocked: false,
  },

  {
    name: 'Task 7',
    complete: false,
    unlocked: false,
  },

  {
    name: 'Task 8',
    complete: false,
    unlocked: false,
  },

  {
    name: 'Task 9',
    complete: false,
    unlocked: false,
  },

  {
    name: 'Task 10',
    complete: false,
    unlocked: false,
  },
];
