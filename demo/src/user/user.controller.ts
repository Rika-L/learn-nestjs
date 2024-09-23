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
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
}
