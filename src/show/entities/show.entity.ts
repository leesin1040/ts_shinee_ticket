import { Seat } from 'src/seat/entities/seat.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'shows',
})
export class Show {
  @PrimaryGeneratedColumn()
  showId: number;

  @ManyToOne(() => User, (user) => user.shows)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'varchar', length: 255, nullable: false })
  showTitle: string;

  @Column({ type: 'text' })
  showContent: string;

  @Column({
    type: 'varchar',
    transformer: {
      from: (value: string) => JSON.parse(value),
      to: (value: object) => JSON.stringify(value),
    },
  })
  showDate: string[];

  @Column({ type: 'int', nullable: false })
  showRunningTime: number;

  @Column({ type: 'varchar', nullable: false })
  showPlace: string;

  @Column({
    type: 'varchar',
    transformer: {
      from: (value: string) => JSON.parse(value),
      to: (value: object) => JSON.stringify(value),
    },
  })
  artists: string[];

  @Column({
    type: 'varchar',
    transformer: {
      from: (value: string) => JSON.parse(value),
      to: (value: object) => JSON.stringify(value),
    },
  })
  showGenres: string[];

  @Column({
    type: 'text',
    transformer: {
      from: (value: string) => JSON.parse(value),
      to: (value: object) => JSON.stringify(value),
    },
  })
  showImg: string[];

  @OneToMany(() => Seat, (seat) => seat.show)
  seats: Seat[];

  @Column({ type: 'boolean', nullable: false, default: false })
  approved: boolean;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
