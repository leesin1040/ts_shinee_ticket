import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserInfo } from 'src/utils/userInfo.decorator';
import { User } from './entities/user.entity';
import { RegisterDTO } from './dto/register.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**회원가입 */
  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    return await this.userService.register(
      registerDTO.email,
      registerDTO.password,
      registerDTO.name,
      registerDTO.phone,
    );
  }

  /**로그인 */
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto.email, loginDto.password);
  }

  /**내 정보 조회 */
  @UseGuards(AuthGuard('jwt'))
  @Get('info')
  getInfo(@UserInfo() user: User) {
    return { user: user };
  }
}
