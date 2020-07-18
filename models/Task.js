import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('tasks')
export default class Task {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: String })
  title;

  @Column({ type: Boolean, default: false })
  cleared;

  @Column({ type: Boolean, default: true })
  locked;
}