import { Model } from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators'

export default class Task extends Model {
  static table = 'tasks'

  @field('title') title
  @field('cleared') cleared
  @field('locked') locked

  @date('created_at') createdAt
  @date('updated_at') updatedAt
}