import { getRepository } from 'typeorm/browser'
import TaskActivity from '@models/TaskActivity'

export function unlockTask(id) {
  return getRepository(TaskActivity).update(id, {
    locked: false,
  })
}

export function completeTask(id, data = {}) {
  return getRepository(TaskActivity).update(id, {
    cleared: true,
    data,
  })
}
