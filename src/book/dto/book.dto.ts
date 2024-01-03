import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNumber()
  @IsNotEmpty({ message: '좌석정보를 입력해주세요.' })
  seatId: number;

  @IsNotEmpty({ message: '예약자 이름을 입력해주세요.' })
  @IsString()
  booker: string;
}
