import {
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';
import { getUuidV4 } from '../utils/db-helper';

export default class Base extends BaseEntity {
  @Column('uuid', {
    nullable: false,
    default: getUuidV4(),
    primary: true,
    name: 'id',
  })
  id: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
