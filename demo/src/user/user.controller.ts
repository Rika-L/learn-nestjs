import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  Put,
  Headers,
  Session,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import * as svgCaptcha from 'svg-captcha';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUser(@Query() query) {
    return {
      code: 200,
      msg: 'success',
      data: query,
    };
  }

  @Post()
  create(@Body() body) {
    console.log(body);
    return {
      code: 200,
    };
  }

  @Put(':id')
  update(@Param() id, @Headers() headers) {
    console.log(headers);
    console.log(id);
    return {
      code: 200,
    };
  }

  @Get('captcha')
  createCaptcha(@Session() session, @Res() res) {
    const { text, data } = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#f0f0f0',
    });
    session.code = text;
    res.type('image/svg+xml');
    res.send(data);
  }
  @Post('create')
  createUser(@Session() session, @Body() body) {
    console.log(session.code, body);
    if (session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()) {
      return {
        message: '验证码正确',
      };
    } else {
      return {
        message: '验证码错误',
      };
    }
  }
}
