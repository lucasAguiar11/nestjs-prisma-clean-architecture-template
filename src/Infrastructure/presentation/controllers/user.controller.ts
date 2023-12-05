import { CreateUserDTO } from '@/application/dtos/user/create-user.dto';
import { CreateUserUseCase } from '@/application/use-cases/user/create-user.use-case';
import { ListUserUseCase } from '@/application/use-cases/user/list-user.use-case';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly listUserUseCase: ListUserUseCase,
  ) {}
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async create(@Body() body: CreateUserDTO) {
    await this.createUserUseCase.execute(body);

    return {
      success: true,
      message: 'User created successfully',
    };
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The users has been successfully listed.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async findAll() {
    const users = await this.listUserUseCase.execute();

    return {
      success: true,
      data: users,
    };
  }
}
