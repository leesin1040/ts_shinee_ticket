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
  @Column({ type: 'number', nullable: false })
  user_id: number;

  @OneToOne(() => Payment, (payment) => payment.book)
  @JoinColumn({ name: 'pay_id' })
  payment: Payment;
  @Column({ type: 'number', nullable: true })
  pay_id: number;

  @OneToOne(() => Seat, (seat) => seat.book)
  @JoinColumn({ name: 'seat_id' })
  seat: number;
  @Column({ type: 'number', nullable: false })
  seat_id: number;

  @Column({ type: 'varchar', nullable: false })
  booker: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
