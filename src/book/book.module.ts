import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Seat } from 'src/seat/entities/seat.entity';
import { Payment } from 'src/payment/entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Seat, Payment])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
