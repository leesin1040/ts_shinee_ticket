import { Show } from './../../show/entities/show.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Role } from '../types/userRole.type';
import { Seat } from 'src/seat/entities/seat.entity';

@Index('email', ['email'], { unique: true })
@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', select: false, nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @Column({ type: 'varchar', select: false, nullable: true })
  google: string;

  @Column({ type: 'varchar', select: false, nullable: true })
  kakao: string;

  @Column({ type: 'varchar', select: false, nullable: true })
  naver: string;

  @Column({ type: 'int', nullable: false, default: 1000000 })
  point: number;

  @OneToMany(() => Seat, (seat) => seat.user)
  seats: Seat[];

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
  shows: any;

  @OneToMany(() => Show, (show) => show.user)
  show: Show;
}
