import { Book } from 'src/book/entities/book.entity';
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

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn()
  payId: number;

  @ManyToOne(() => User, (user) => user.seats)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Book, (book) => book.payment, { nullable: true })
  @JoinColumn({ name: 'bookId' })
  book: Book;

  @Column({ type: 'int', nullable: true })
  plusPoint: number;

  @Column({ type: 'int', nullable: true })
  minusPoint: number;

  @Column({ type: 'varchar', nullable: true })
  payPath: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
