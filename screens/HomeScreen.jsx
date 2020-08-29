import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { getRepository } from 'typeorm/browser'
import camelCase from 'lodash/camelCase'
import each from 'lodash/each'
import upperFirst from 'lodash/upperFirst'

import Text from '@components/Text'
import { colors } from '@constants/theme'
import SessionContext from '@contexts/SessionContext'
import Task from '@models/Task'
import TaskActivity from '@models/TaskActivity'
import User from '@models/User'

export default function HomeScreen({ navigation, route }) {
  const taskRepository = getRepository(Task)
  const taskActivityRepository = getRepository(TaskActivity)
  const session = React.useContext(SessionContext)
  const [loading, setLoading] = React.useState(false)
  const [tasks, setTasks] = React.useState([])
  const [activities, setActivities] = React.useState(
    session.user.activities || [],
  )

  function startTask(activity) {
    navigation.navigate(
      upperFirst(camelCase(activity.task?.code.toLowerCase() + 'Task')),
      { activity: activity.id },
    )
  }

  async function fetchActivities() {
    //
  }

  async function preloadActivities() {
    try {
      if (activities.length > 0) {
        return
      }

      setLoading(true)

      each(tasks, async (task, key) => {
        const activity = new TaskActivity()
        activity.locked = key !== 0
        activity.cleared = false
        activity.task = task
        activity.user = session.user
        await taskActivityRepository.save(activity)
      })

      await fetchActivities()
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchTasks() {
    try {
      setLoading(true)

      const tasks = await taskRepository.find()
      setTasks(tasks)

      setLoading(false)
    } catch (error) {}
  }

  React.useEffect(() => {
    const bootstrap = async () => {
      await fetchTasks()
      preloadActivities()
    }

    bootstrap()
  }, [route.params?.refresh])

  if (loading) {
    return null
  }

  return (
    <View style={styles.root}>
      <Text weight="semibold" size="xl">
        You can do it {session.user.first_name}!
      </Text>

      <View style={styles.taskList}>
        {activities.map((activity, key) => (
          <TouchableOpacity
            key={activity.id}
            style={styles.task}
            disabled={activity.locked || activity.cleared}
            onPress={() => startTask(activity)}
          >
            <View
              style={[
                styles.body,
                activity.locked && styles.locked,
                activity.cleared && styles.cleared,
              ]}
            >
              <Text
                weight="semibold"
                size="lg"
                color={
                  activity.locked || activity.cleared ? 'white' : 'gray-500'
                }
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
