"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const return_customer_dto_1 = require("./dto/return-customer.dto");
const Customer_1 = require("../entities/Customer");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let CustomersService = class CustomersService {
    constructor(cutomerRepo) {
        this.cutomerRepo = cutomerRepo;
    }
    async create(createCustomerDto) {
        try {
            createCustomerDto.customerName = await this.titleCaseWord(createCustomerDto.customerName);
            createCustomerDto.customerSurname = await this.titleCaseWord(createCustomerDto.customerSurname);
            const user = await this.cutomerRepo.findOneBy({
                customerName: createCustomerDto.customerName,
                customerSurname: createCustomerDto.customerSurname,
                customerPhone: createCustomerDto.customerPhone,
            });
            if (user)
                throw new common_1.HttpException('User already exist', 200);
            const result = await this.cutomerRepo.save(createCustomerDto);
            const rdto = new return_customer_dto_1.ReturnCustomerDto();
            rdto.customerName = result.customerName;
            rdto.customerSurname = result.customerSurname;
            rdto.customerPhone = result.customerPhone;
            return { message: 'User created' };
        }
        catch (error) {
            return new common_1.HttpException(error, 200);
        }
    }
    async findAll() {
        try {
            return await this.cutomerRepo.find();
        }
        catch (error) {
            return new common_1.HttpException(error, 200);
        }
    }
    async findOneById(customerId) {
        try {
            return await this.cutomerRepo.findOne({ where: { customerId } });
        }
        catch (error) {
            return new common_1.HttpException(error, 200);
        }
    }
    async findByName(customerName, customerSurname) {
        try {
            return await this.cutomerRepo.find({
                where: { customerName, customerSurname },
            });
        }
        catch (error) {
            return new common_1.HttpException(error, 200);
        }
    }
    async findOneByPhone(customerPhone) {
        try {
            return await this.cutomerRepo.findOne({ where: { customerPhone } });
        }
        catch (error) {
            return new common_1.HttpException(error, 200);
        }
    }
    async update(customerId, updateCustomerDto) {
        if (!customerId)
            return new common_1.HttpException('customerId empty', 200);
        try {
            const customer = await this.cutomerRepo.findOne({
                where: { customerId },
            });
            if (!customer)
                return new common_1.HttpException('Customer not found', 200);
            customer.customerName = await this.titleCaseWord(updateCustomerDto.customerName);
            customer.customerSurname = await this.titleCaseWord(updateCustomerDto.customerSurname);
            customer.customerPhone = updateCustomerDto.customerPhone;
            return await this.cutomerRepo.save(customer);
        }
        catch (error) {
            return new common_1.HttpException(error, 200);
        }
    }
    async remove(customerId) {
        try {
            const customer = await this.cutomerRepo.findOne({
                where: { customerId },
            });
            if (!customer)
                return new common_1.HttpException('Customer not found', 200);
            customer.deletedAt = new Date();
            return await this.cutomerRepo.save(customer);
        }
        catch (error) {
            return new common_1.HttpException(error, 200);
        }
    }
    titleCaseWord(word) {
        return (word = word[0].toUpperCase() + word.slice(1));
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Customer_1.Customer)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map