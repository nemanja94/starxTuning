import { HttpException, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { ReturnCustomerDto } from './dto/return-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from '../entities/Customer';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly cutomerRepo: Repository<Customer>,
  ) {}

  async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<ReturnCustomerDto | HttpException> {
    try {
      createCustomerDto.customerName = await this.titleCaseWord(
        createCustomerDto.customerName,
      );
      createCustomerDto.customerSurname = await this.titleCaseWord(
        createCustomerDto.customerSurname,
      );

      const user = await this.cutomerRepo.findOneBy({
        customerName: createCustomerDto.customerName,
        customerSurname: createCustomerDto.customerSurname,
        customerPhone: createCustomerDto.customerPhone,
      });

      if (user) return new HttpException('User already exist', 200);

      const result: Customer = await this.cutomerRepo.save(createCustomerDto);

      const rdto: ReturnCustomerDto = new ReturnCustomerDto();
      rdto.customerName = result.customerName;
      rdto.customerSurname = result.customerSurname;
      rdto.customerPhone = result.customerPhone;

      return rdto;
    } catch (error) {
      return new HttpException(error, 500);
    }
  }

  async findAll(): Promise<Customer[] | HttpException> {
    try {
      return await this.cutomerRepo.find();
    } catch (error) {
      return new HttpException(error, 500);
    }
  }

  async findOneById(customerId: number): Promise<Customer | HttpException> {
    try {
      return await this.cutomerRepo.findOne({ where: { customerId } });
    } catch (error) {
      return new HttpException(error, 500);
    }
  }

  async findByName(
    customerName: string,
    customerSurname: string,
  ): Promise<Customer[] | HttpException> {
    try {
      return await this.cutomerRepo.find({
        where: { customerName, customerSurname },
      });
    } catch (error) {
      return new HttpException(error, 500);
    }
  }

  async findOneByPhone(
    customerPhone: string,
  ): Promise<Customer | HttpException> {
    try {
      return await this.cutomerRepo.findOne({ where: { customerPhone } });
    } catch (error) {
      return new HttpException(error, 500);
    }
  }

  async update(
    customerId: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer | HttpException> {
    if (!customerId) return new HttpException('customerId empty', 400);

    try {
      const customer: Customer = await this.cutomerRepo.findOne({
        where: { customerId },
      });

      if (!customer) return new HttpException('Customer not found', 403);

      customer.customerName = await this.titleCaseWord(
        updateCustomerDto.customerName,
      );
      customer.customerSurname = await this.titleCaseWord(
        updateCustomerDto.customerSurname,
      );
      customer.customerPhone = updateCustomerDto.customerPhone;

      return await this.cutomerRepo.save(customer);
    } catch (error) {
      return new HttpException(error, 500);
    }
  }

  async remove(customerId: number): Promise<Customer | HttpException> {
    try {
      const customer: Customer = await this.cutomerRepo.findOne({
        where: { customerId },
      });

      if (!customer) return new HttpException('Customer not found', 403);

      customer.deletedAt = new Date();
      return await this.cutomerRepo.save(customer);
    } catch (error) {
      return new HttpException(error, 500);
    }
  }

  titleCaseWord(word: string): string {
    return (word = word[0].toUpperCase() + word.slice(1));
  }
}
