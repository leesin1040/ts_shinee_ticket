import { Show } from 'src/show/entities/show.entity';
import { User } from 'src/user/entities/user.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'seats' })
export class Seat {
  @PrimaryGeneratedColumn()
  seatId: number;

  @ManyToOne(() => Show, (show) => show.seats)
  @JoinColumn({ name: 'show_id' })
  show: Show;

  @ManyToOne(() => User, (user) => user.seats)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    default: 'FOR_SALE',
  })
  seatState: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  seatInfo: string;

  @Column({ type: 'int', nullable: false })
  price: number;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
