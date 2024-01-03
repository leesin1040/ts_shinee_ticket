import { IsArray, IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateShowDto {
  @IsNotEmpty({ message: '콘서트 타이틀을 입력해주세요.' })
  @IsString()
  showTitle: string;

  @IsNotEmpty({ message: '콘서트 내용을 입력해주세요.' })
  @IsString()
  showContent: string;

  @IsArray()
  @IsString({ each: true })
  showDate: string[];

  @IsNotEmpty({ message: '콘서트 러닝타임을 분 단위로 입력해주세요.' })
  @IsNumber()
  showRunningTime: number;

  @IsNotEmpty({ message: '콘서트 장소를 입력해주세요.' })
  @IsString()
  showPlace: string;

  @IsArray()
  @IsString({ each: true })
  artists: string[];

  @IsArray()
  @IsString({ each: true })
  showGenres: string[];

  @IsArray()
  @IsString({ each: true })
  showImg: string[];
}

export class UpdateShowDto {
  @IsNotEmpty({ message: '콘서트 타이틀을 입력해주세요.' })
  @IsString()
  showTitle: string;

  @IsNotEmpty({ message: '콘서트 내용을 입력해주세요.' })
  @IsString()
  showContent: string;

  @IsArray()
  @IsString({ each: true })
  showDate: string[];

  @IsNotEmpty({ message: '콘서트 러닝타임을 분 단위로 입력해주세요.' })
  @IsNumber()
  showRunningTime: number;

  @IsNotEmpty({ message: '콘서트 장소를 입력해주세요.' })
  @IsString()
  showPlace: string;

  @IsArray()
  @IsString({ each: true })
  artists: string[];

  @IsArray()
  @IsString({ each: true })
  showGenres: string[];

  @IsArray()
  @IsString({ each: true })
  showImg: string[];
}
