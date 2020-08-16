import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm/browser';

export default class Model {
  @PrimaryGeneratedColumn()
  id

  @CreateDateColumn()
  created_at

  @UpdateDateColumn()
  updated_at
}