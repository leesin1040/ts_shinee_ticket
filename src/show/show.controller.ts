import { ShowService } from './show.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from 'src/auth/role.guard';
import { Role } from 'src/user/types/userRole.type';
import { CreateShowDto } from './dto/show.dto';
import { Roles } from 'src/auth/role.decorator';
import { UserInfo } from 'src/utils/userInfo.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('show')
export class ShowController {
  constructor(private readonly showService: ShowService) {}

  /** 공연 전체 목록 */
  @Get()
  async findAll() {
    return await this.showService.findAll();
  }

  /** 공연 상세보기 */
  @UseGuards(RolesGuard)
  @Roles(Role.User, Role.Business, Role.Admin)
  @Get(':showId')
  async findOne(@Param('showId') showId: number) {
    return await this.showService.findOne(showId);
  }

  /** 공연 포스팅 */
  @UseGuards(RolesGuard)
  @Roles()
  @Post()
  async showPost(@UserInfo() user: User, @Body() createShowDto: CreateShowDto) {
    return await this.showService.showPost(createShowDto, user);
  }

  /**공연 수정 */
  @UseGuards(RolesGuard)
  @Roles(Role.Business)
  @Put(':showId')
  async showUpdate(
    @UserInfo() user: User,
    @Param('showId') showId: number,
    @Body() createShowDto: CreateShowDto,
  ) {
    await this.showService.showUpdate(user, showId, createShowDto);
  }
  /**공연 삭제 */
  @UseGuards(RolesGuard)
  @Roles(Role.Business)
  @Delete(':showId')
  async showDelete(@UserInfo() user: User, @Param('showId') showId: number) {
    await this.showService.showDelete(user, showId);
  }
}
