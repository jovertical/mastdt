import { Entity, Column } from 'typeorm/browser'
import Model from './Model'

@Entity('tasks')
export default class Task extends Model {
  @Column({ type: 'varchar' })
  code

  @Column({ type: 'varchar' })
  title

  @Column({ type: 'tinyint', default: false })
  cleared

  @Column({ type: 'tinyint', default: true })
  locked
}