import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './schema'
import Task from '@models/Task'

const adapter = new SQLiteAdapter({ schema })

export default new Database({
  adapter,
  modelClasses: [
    Task
  ],
  actionsEnabled: true,
})