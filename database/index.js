import { createConnection, getConnection } from 'typeorm/browser'
import Task from '@models/Task'

export default async () => {
  try {
    return getConnection()
  } catch (error) {
    return createConnection({
      database: 'mastdt',
      driver: require('expo-sqlite'),
      entities: [
        Task
      ],
      synchronize: true,
      type: 'expo',
    })
  }
}
