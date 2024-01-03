import {
  Controller,
  Delete,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RolesGuard } from 'src/auth/role.guard';
import { SeatService } from './seat.service';
import { Role } from 'src/user/types/userRole.type';
import { Roles } from 'src/auth/role.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserInfo } from 'src/utils/userInfo.decorator';

@UseGuards(RolesGuard)
@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Get()
  async getAllSeat() {
    return await this.seatService.getAllSeat();
  }

  @Roles(Role.Business)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createSeat(@UserInfo() user: User, @UploadedFile() file: Express.Multer.File) {
    await this.seatService.createSeat(file);
  }

  @Roles(Role.Business)
  @Delete(':showId')
  
}
