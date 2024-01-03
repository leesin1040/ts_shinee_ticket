import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seat } from './entities/seat.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { parse } from 'papaparse';
import _ from 'lodash';
import { Show } from 'src/show/entities/show.entity';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
    @InjectRepository(Show)
    private readonly showRepository: Repository<Show>,
  ) {}

  async getAllSeat(): Promise<Seat[]> {
    return await this.seatRepository.find();
  }

  async findByShowId(showId: number): Promise<Seat[]> {
    return await this.seatRepository.find({
      relations: ['show'],
      where: { show: { showId: showId } },
      select: { seatInfo: true, seatState: true, seatId: true },
    });
  }

  async createSeat(showId: number, user: User, file: Express.Multer.File) {
    if (!file.originalname.endsWith('.csv')) {
      throw new BadRequestException('CSV파일만 업로드 가능합니다.');
    }

    const csvContent = file.buffer.toString();

    let perseResult;
    try {
      perseResult = parse(csvContent, {
        header: true,
        skipEmptyLines: true,
      });
    } catch (error) {
      throw new BadRequestException('CSV 파싱에 실패했습니다.');
    }

    const seatsData = perseResult.data as any[];

    for (const seatData of seatsData) {
      if (_.isNil(seatData.seatInfo) || _.isNil(seatData.price)) {
        throw new BadRequestException(
          'CSV파일은 seatInfo와 price 컬럼을 포함해야 합니다.',
        );
      }
    }

    const show = await this.showRepository.findOneBy({ showId });
    console.log(showId + ' 이것은 쇼 아이디여');
    console.log('이것은 쇼 정보요' + show.showId);
    const createSeatDtos = seatsData.map((seatData) => ({
      seatInfo: seatData.seatInfo,
      price: seatData.price,
      show: { showId: show.showId },
      user: user,
    }));

    await this.seatRepository.save(createSeatDtos);
  }

  async deleteSeats(showId: number): Promise<void> {
    const seats = await this.seatRepository.find({
      relations: ['show'],
      where: { show: { showId: showId } },
    });

    if (seats.length === 0) {
      throw new BadRequestException('등록된 좌석이 없습니다.');
    }

    await this.seatRepository.remove(seats);
  }
}
