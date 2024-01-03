import { RolesGuard } from 'src/auth/role.guard';
import { BookService } from './book.service';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/role.decorator';
import { Role } from 'src/user/types/userRole.type';
import { UserInfo } from 'src/utils/userInfo.decorator';
import { User } from 'src/user/entities/user.entity';
import { CreateBookDto } from './dto/book.dto';

@UseGuards(RolesGuard)
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  /**내 예매 목록 보기 */
  @Roles(Role.User)
  @Get('MyBooks')
  async getMyBooks(@UserInfo() user: User) {
    return await this.bookService.getMyBooks(user.userId);
  }

  /**공연 ID로 예매하기 - 좌석은 직접 입력 */
  @Roles(Role.User)
  @Post(':showId')
  async createBook(
    @UserInfo() user: User,
    @Param('showId') showId: number,
    @Body() createBookDto: CreateBookDto,
  ) {
    return await this.bookService.createBook(createBookDto, user);
  }
  /**예약 취소하기 */
  // @Roles(Role.User, Role.Business, Role.Admin)
  // @Delete(':bookId')
  // async deleteBook(@UserInfo() user: User, @Param('bookId') bookId: number) {
  //   return await this.bookService.deleteBook(user, bookId);
  // }
}
