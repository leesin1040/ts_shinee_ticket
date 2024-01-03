import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNumber()
  @IsNotEmpty({ message: '좌석정보를 입력해주세요.' })
  seatId: number;

  @IsArray()
  @IsString({ each: true })
  booker: string[];
}
