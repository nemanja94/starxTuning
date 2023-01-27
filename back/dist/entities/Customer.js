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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const Vehicle_1 = require("./Vehicle");
let Customer = class Customer {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('int', { primary: true, name: 'CUSTOMER_ID' }),
    __metadata("design:type", Number)
], Customer.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('varchar', { name: 'CUSTOMER_NAME', nullable: true, length: 32 }),
    __metadata("design:type", String)
], Customer.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('varchar', { name: 'CUSTOMER_SURNAME', nullable: true, length: 32 }),
    __metadata("design:type", String)
], Customer.prototype, "customerSurname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('varchar', { name: 'CUSTOMER_PHONE', nullable: true, length: 32 }),
    __metadata("design:type", String)
], Customer.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('timestamp', { name: 'CREATED_AT' }),
    __metadata("design:type", Date)
], Customer.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('timestamp', { name: 'UPDATED_AT', nullable: true }),
    __metadata("design:type", Date)
], Customer.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('timestamp', { name: 'DELETED_AT', nullable: true }),
    __metadata("design:type", Date)
], Customer.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Vehicle_1.Vehicle, (vehicle) => vehicle.customer, { eager: true }),
    __metadata("design:type", Array)
], Customer.prototype, "vehicles", void 0);
Customer = __decorate([
    (0, typeorm_1.Entity)('CUSTOMER', { schema: 'strax' })
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map