import { createConnection, getConnection } from 'typeorm/browser'
import User from '@models/User'

export default async () => {
  try {
    return getConnection()
  } catch (error) {
    return createConnection({
      database: 'mastdt',
      driver: require('expo-sqlite'),
      entities: [
        User
      ],
      synchronize: true,
      type: 'expo',
    })
  }
}
