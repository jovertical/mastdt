import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { getRepository } from 'typeorm/browser'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'

import Text from '@components/Text'
import { colors } from '@constants/theme'
import connect from '@database'
import Task from '@models/Task'

export default function HomeScreen({ navigation, route }) {
  const [loading, setLoading] = React.useState(false)
  const [tasks, setTasks] = React.useState([])

  async function fetchTasks() {
    try {
      await connect()

      setLoading(true)
      const taskRepository = getRepository(Task)
      setTasks(await taskRepository.find())
      setLoading(false)
    } catch (error) {}
  }

  React.useEffect(() => {
    fetchTasks()
  }, [route.params?.refresh])

  if (loading) {
    return null
  }

  return (
    <View style={styles.root}>
      <Text weight="semibold" size="xl">
        Tasks
      </Text>

      <View style={styles.taskList}>
        {tasks.map((task, key) => (
          <TouchableOpacity
            key={task.id}
            style={styles.task}
            disabled={task.locked || task.cleared}
            onPress={() =>
              navigation.navigate(
                upperFirst(camelCase(task.code.toLowerCase() + 'Task')),
              )
            }
          >
            <View
              style={[
                styles.body,
                task.locked && styles.locked,
                task.cleared && styles.cleared,
              ]}
            >
              <Text
                weight="semibold"
                size="lg"
                color={task.locked || task.cleared ? 'white' : 'gray-500'}
              >
                {key + 1}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
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

  cleared: {
    backgroundColor: colors['blue-500'],
    borderWidth: 0,
  },

  locked: {
    backgroundColor: colors['gray-500'],
    borderWidth: 0,
  },
})
