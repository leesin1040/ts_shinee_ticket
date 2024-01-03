import { Book } from 'src/book/entities/book.entity';
import { Show } from 'src/show/entities/show.entity';
import { User } from 'src/user/entities/user.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
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
  @Column({ type: 'number', nullable: false })
  show_id: number;

  @ManyToOne(() => User, (user) => user.seats)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @Column({ type: 'number', nullable: false })
  user_id: number;

  @OneToOne(() => Book, (book) => book.seat)
  @JoinColumn({ name: 'book_id' })
  book: number;
  @Column({ type: 'number', nullable: true })
  book_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  seatInfo: string;

  @Column({ type: 'int', nullable: false })
  price: number;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
