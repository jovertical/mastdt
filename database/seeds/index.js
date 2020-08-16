import connect from '@database'
import TasksTableSeeder from './TasksTableSeeder'

export default class DatabaseSeeder {
  static async run() {
    await connect()
    await TasksTableSeeder.run()
    return
  }
}
