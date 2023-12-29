import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

import { Role } from '../types/userRole.type';

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

  @Column({ type: 'varchar', select: false, nullable: true })
  google: string;

  @Column({ type: 'varchar', select: false, nullable: true })
  kakao: string;

  @Column({ type: 'varchar', select: false, nullable: true })
  naver: string;

  @Column({ type: 'int', select: false, nullable: false, default: 1000000 })
  point: number;
}
