import { createConnection, getConnection } from 'typeorm/browser'
import Task from '@models/Task'
import User from '@models/User'

export default async () => {
  try {
    return getConnection()
  } catch (error) {
    return createConnection({
      database: 'mastdt',
      driver: require('expo-sqlite'),
      entities: [
        Task,
        User
      ],
      synchronize: true,
      type: 'expo',
    })
  }
}
