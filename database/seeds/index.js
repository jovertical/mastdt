import TasksTableSeeder from './TasksTableSeeder'

export default class DatabaseSeeder {
  static async run() {
    await TasksTableSeeder.run()
    return
  }
}
