import { createConnection, getConnection } from 'typeorm/browser'
import Task from '@models/Task'
import TaskActivity from '@models/TaskActivity'
import User from '@models/User'

export default () => {
  try {
    return getConnection()
  } catch (error) {
    return createConnection({
      database: 'mastdt',
      driver: require('expo-sqlite'),
      entities: [Task, TaskActivity, User],
      synchronize: true,
      type: 'expo',
    })
  }
}
