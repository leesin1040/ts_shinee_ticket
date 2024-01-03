import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './entities/seat.entity';
import { Show } from 'src/show/entities/show.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seat, Show])],
  providers: [SeatService],
  controllers: [SeatController],
})
export class SeatModule {}
