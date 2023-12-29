import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'shows',
})
export class Show {
  @PrimaryGeneratedColumn()
  showId: number;

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

  @Column({ type: 'number', nullable: false })
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

  @Column({ type: 'boolean', nullable: false, default: false })
  approved: boolean;
}
