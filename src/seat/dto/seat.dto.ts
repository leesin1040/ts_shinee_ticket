import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createSeatDto {
  @IsString()
  @IsNotEmpty({ message: '좌석 정보를 입력해 주세요' })
  seatInfo: string;

  @IsNumber()
  @IsNotEmpty({ message: '좌석 가격을 입력해 주세요' })
  price: number;
}

export class updateSeatBooked {
  @IsNumber()
  @IsNotEmpty({ message: '좀 되봐' })
  book_id: number;
}
