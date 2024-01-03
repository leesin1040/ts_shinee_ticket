import { Payment } from 'src/payment/entities/payment.entity';
import { Seat } from 'src/seat/entities/seat.entity';
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

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  bookId: number;

  @ManyToOne(() => User, (user) => user.book)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Payment, (payment) => payment.book, { nullable: true })
  @JoinColumn({ name: 'pay_id' })
  payment: Payment;

  @OneToOne(() => Seat, (seat) => seat.book, { nullable: false })
  @JoinColumn({ name: 'seat_id' })
  seat: number;

  @Column({ type: 'json', nullable: false })
  booker: any;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
