import { Entity, Column } from 'typeorm/browser';
import Model from './Model';

@Entity('users')
export default class User extends Model {
  @Column({ type: 'varchar' })
  first_name;

  @Column({ type: 'varchar', nullable: true })
  middle_name;

  @Column({ type: 'varchar' })
  last_name;

  @Column({ type: 'varchar' })
  gender;

  @Column({ type: 'smallint' })
  age;

  @Column({ type: 'smallint' })
  grade;
}