import { IsArray, IsString } from 'class-validator';

export class CreateBookDto {
  @IsArray()
  @IsString({ each: true })
  seatId: string[];

  @IsArray()
  @IsString({ each: true })
  booker: string[];
}
