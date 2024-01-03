import { CreateBookDto } from './dto/book.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { User } from 'src/user/entities/user.entity';
import { Seat } from 'src/seat/entities/seat.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**내 예매 목록 보기 */
  async getMyBooks(userId: number): Promise<Book[]> {
    return await this.bookRepository.find({
      relations: ['user'],
      where: { user: { userId: userId } },
      select: { bookId: true, booker: true },
    });
  }
  /**공연 ID로 예매하기 - 좌석은 직접 입력 */
  async createBook(createBookDto: CreateBookDto, user: User) {
    const findSeat = await this.seatRepository.findOneBy({
      seatId: createBookDto.seatId,
    });

    if (!findSeat) {
      throw new BadRequestException('존재하지 않는 좌석입니다.');
    }
    if (typeof findSeat.book === typeof Number) {
      throw new BadRequestException('이미 판매된 좌석입니다.');
    }

    const newBook = await this.bookRepository.save({
      createBookDto,
      user_id: user.userId,
      seat_id: findSeat.seatId,
    });
    /**시트 레포지토리에서 예약Id 넣기 */
    await this.seatRepository.update(
      {
        seatId: createBookDto.seatId,
      },
      { book_id: newBook.bookId },
    );
    /**유저 레포지토리에서 포인트 차감하기 */
    const findUserForPoint = await this.userRepository.findOneBy({
      userId: user.userId,
    });
    await this.userRepository.update(
      { userId: user.userId },
      { point: findUserForPoint.point - findSeat.price },
    );
  }
  /**예약 취소하기 */
  // async deleteBook
}
