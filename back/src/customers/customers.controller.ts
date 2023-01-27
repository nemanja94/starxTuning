import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from '../entities/Customer';
@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiOperation({ summary: 'Creates new customer' })
  @ApiResponse({
    status: 201,
    type: Customer,
    isArray: false,
    description: 'Customer created',
  })
  @ApiResponse({
    status: 200,
    type: HttpException,
    isArray: true,
    description: 'Error with Database',
  })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto);
    return this.customersService.create(createCustomerDto);
  }

  @ApiOperation({
    summary: 'Returns all customers from db',
    description: 'Returns all customers from db',
  })
  @ApiResponse({
    status: 200,
    type: Customer,
    isArray: true,
    description: 'Evrey Customer from db',
  })
  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.customersService.findOne(+id);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
