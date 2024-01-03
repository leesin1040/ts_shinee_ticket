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

  @OneToOne(() => Book, (book) => book.payment, { nullable: true }) // book 엔티티와의 ManyToOne 관계를 정의하며, nullable 옵션을 추가하여 비어 있을 수 있음을 명시합니다.
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
