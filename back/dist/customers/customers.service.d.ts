import { HttpException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from '../entities/Customer';
import { Repository } from 'typeorm';
export declare class CustomersService {
    private readonly cutomerRepo;
    constructor(cutomerRepo: Repository<Customer>);
    create(createCustomerDto: CreateCustomerDto): Promise<{
        message: string;
    } | HttpException>;
    findAll(): Promise<Customer[] | HttpException>;
    findOneById(customerId: number): Promise<Customer | HttpException>;
    findByName(customerName: string, customerSurname: string): Promise<Customer[] | HttpException>;
    findOneByPhone(customerPhone: string): Promise<Customer | HttpException>;
    update(customerId: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer | HttpException>;
    remove(customerId: number): Promise<Customer | HttpException>;
    titleCaseWord(word: string): string;
}
