import { HttpException } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from '../entities/Customer';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(createCustomerDto: CreateCustomerDto): Promise<{
        message: string;
    } | HttpException>;
    findAll(): Promise<HttpException | Customer[]>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<Customer | HttpException>;
    remove(id: string): Promise<Customer | HttpException>;
}
