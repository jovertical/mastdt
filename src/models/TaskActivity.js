import { Entity, Column, ManyToOne } from 'typeorm/browser'
import Model from './Model'
import Task from './Task'
import User from './User'

@Entity('task_activities')
export default class TaskActivity extends Model {
  @Column({ type: 'tinyint', default: false })
  cleared

  @Column({ type: 'tinyint', default: true })
  locked

  @Column({ type: 'simple-json', nullable: true })
  data

  @ManyToOne((type) => Task, (task) => task.activities, { eager: true })
  task

  @ManyToOne((type) => User, (user) => user.activities)
  user
}
