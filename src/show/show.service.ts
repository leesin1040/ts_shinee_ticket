import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Show } from './entities/show.entity';
import { FindManyOptions, Like, Repository } from 'typeorm';
import _ from 'lodash';
import { UpdateShowDto, CreateShowDto } from './dto/show.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ShowService {
  constructor(
    @InjectRepository(Show)
    private readonly showRepository: Repository<Show>,
  ) {}

  /** 공연 전체 목록 */
  async findAll(): Promise<Show[]> {
    return await this.showRepository.find({
      select: [
        'showId',
        'showTitle',
        'artists',
        'showDate',
        'showPlace',
        'showImg',
      ],
    });
  }

  /** 공연 검색 */
  async searchShow(keyword: string): Promise<Show[]> {
    const queryOptions: FindManyOptions<Show> = {
      where: [
        { showTitle: Like(`%${keyword}%`) },
        { artists: Like(`%${keyword}%`) },
        { showPlace: Like(`%${keyword}%`) },
      ],
      select: [
        'showId',
        'showTitle',
        'artists',
        'showDate',
        'showPlace',
        'showImg',
      ],
    };

    const searchShowList = await this.showRepository.find(queryOptions);

    if (searchShowList.length === 0) {
      throw new BadRequestException('해당하는 공연이 존재하지 않습니다.');
    }
    if (keyword === '') {
      throw new BadRequestException('검색어를 입력하세요.');
    }
    return searchShowList;
  }
  /** 공연 상세 조회 */
  async findOne(showId: number) {
    return await this.showRepository.findOneBy({ showId });
  }

  /** 공연 등록 */
  async showPost(createShowDto: CreateShowDto, user: User) {
    await this.showRepository.save({ ...createShowDto, user });
  }

  /**공연 수정 */
  async showUpdate(user: User, showId: number, updateShowDto: UpdateShowDto) {
    await this.verifyShowById(user, showId);
    await this.showRepository.update({ showId }, updateShowDto);
  }

  /**공연 삭제 */
  async showDelete(user: User, showId: number) {
    await this.verifyShowById(user, showId);
    await this.showRepository.delete({ showId });
  }

  /**아이디로 공연 찾고 작성자 확인 */
  private async verifyShowById(user: User, showId: number) {
    const shows = await this.showRepository.find({
      where: { showId: showId },
      relations: ['user'],
    });
    const show = shows[0];

    if (_.isNil(show)) {
      throw new NotFoundException('존재하지 않는 쇼입니다.');
    }
    if (+show.user.userId !== +user.userId) {
      console.log(+show.user.userId, +user.userId);

      throw new NotFoundException('권한이 없습니다.');
    }

    return show;
  }
}
