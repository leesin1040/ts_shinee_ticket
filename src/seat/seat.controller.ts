import {
  Controller,
  Delete,
  Get,
  Param,
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
import { User } from 'src/user/entities/user.entity';

@UseGuards(RolesGuard)
@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Roles(Role.Admin)
  @Get()
  async getAllSeat() {
    return await this.seatService.getAllSeat();
  }

  @Roles(Role.Admin, Role.Business, Role.User)
  @Get(':showId')
  async findByShowId(@Param('showId') showId: number) {
    return await this.seatService.findByShowId(showId);
  }

  @Roles(Role.Business)
  @Post(':showId')
  @UseInterceptors(FileInterceptor('file'))
  async createSeat(
    @UserInfo() user: User,
    @Param('showId') showId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    await this.seatService.createSeat(showId, user, file);
  }

  @Roles(Role.Business)
  @Delete(':showId')
  async deleteSeats(@Param('showId') showId: number) {
    await this.seatService.deleteSeats(showId);
  }
}
