import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { getRepository } from 'typeorm/browser'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'

import Text from '~/components/Text'
import { colors } from '~/constants/theme'
import SessionContext from '~/contexts/SessionContext'
import Task from '~/models/Task'
import TaskActivity from '~/models/TaskActivity'
import * as taskQueries from '~/queries/task'

export default function HomeScreen({ navigation, route }) {
  const taskRepository = getRepository(Task)
  const taskActivityRepository = getRepository(TaskActivity)
  const session = React.useContext(SessionContext)
  const [loading, setLoading] = React.useState(false)
  const [activities, setActivities] = React.useState(
    session.user.activities || [],
  )

  function startTask(activity, nextActivity) {
    navigation.navigate(
      upperFirst(camelCase(activity.task?.code.toLowerCase() + 'Task')),
      {
        activity: activity.id,
        nextActivity: nextActivity.id,
      },
    )
  }

  async function fetchActivities() {
    const activities = await taskActivityRepository.find({
      where: {
        user: {
          id: session.user.id,
        },
      },
    })

    setActivities(activities)
  }

  async function preloadTasks() {
    const tasksLoaded = await taskQueries.tasksLoaded()

    if (tasksLoaded) {
      return
    }

    return taskQueries.createInitialTasks()
  }

  async function preloadActivities(tasks) {
    if (activities.length > 0) {
      return
    }

    for (const key in tasks) {
      const activity = new TaskActivity()
      activity.locked = parseInt(key) !== 0
      activity.cleared = false
      activity.task = tasks[key]
      activity.user = session.user
      await taskActivityRepository.save(activity)
    }
  }

  React.useEffect(() => {
    const bootstrap = async () => {
      try {
        setLoading(true)

        await preloadTasks()
        const tasks = await taskRepository.find()
        await preloadActivities(tasks)
        await fetchActivities()

        setLoading(false)
      } catch (error) {
        alert(JSON.stringify(error))
      }
    }

    bootstrap()
  }, [route.params?.refresh])

  return (
    <View style={styles.root}>
      {loading ? (
        <Text>Please wait...</Text>
      ) : (
        <React.Fragment>
          <Text weight="semibold" size="xl">
            You can do it {session.user.first_name}!
          </Text>

          <View style={styles.taskList}>
            {activities.map((activity, key) => (
              <TouchableOpacity
                key={activity.id}
                style={styles.task}
                disabled={activity.locked || activity.cleared}
                onPress={() => startTask(activity, activities[key + 1])}
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
        </React.Fragment>
      )}
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
