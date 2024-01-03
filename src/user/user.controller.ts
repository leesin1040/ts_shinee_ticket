import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserInfo } from 'src/utils/userInfo.decorator';
import { User } from './entities/user.entity';
import { RegisterDTO } from './dto/register.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**회원가입 */
  @Post('register')
  @ApiResponse({ status: 200, description: '회원가입 완료' })
  async register(@Body() registerDTO: RegisterDTO) {
    return await this.userService.register(
      registerDTO.email,
      registerDTO.name,
      registerDTO.password,
      registerDTO.phone,
    );
  }

  /**로그인 */
  @Post('login')
  @ApiResponse({ status: 200, description: '로그인 완료' })
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto.email, loginDto.password);
  }

  /**내 정보 조회 */
  @UseGuards(AuthGuard('jwt'))
  @Get('info')
  @ApiResponse({ status: 200, description: '회원정보조회' })
  getInfo(@UserInfo() user: User) {
    return { user: user };
  }
}
