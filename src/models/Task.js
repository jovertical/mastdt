import { Entity, Column, OneToMany } from 'typeorm/browser'
import Model from './Model'
import TaskActivity from './TaskActivity'

@Entity('tasks')
export default class Task extends Model {
  @Column({ type: 'varchar' })
  code

  @Column({ type: 'varchar' })
  title

  @OneToMany((type) => TaskActivity, (taskActivity) => taskActivity.task)
  activities
}
