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
exports.Vehicle = void 0;
const typeorm_1 = require("typeorm");
const Ticket_1 = require("./Ticket");
const Customer_1 = require("./Customer");
let Vehicle = class Vehicle {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'VEHILCE_ID' }),
    __metadata("design:type", Number)
], Vehicle.prototype, "vehilceId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'CUSTOMER_ID' }),
    __metadata("design:type", Number)
], Vehicle.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'VEHICLE_BRAND', nullable: true, length: 32 }),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicleBrand", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'VEHICLE_MODEL', nullable: true, length: 32 }),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicleModel", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'VEHICLE_POWER',
        nullable: true,
        precision: 8,
        scale: 0,
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "vehiclePower", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'VEHICLE_CCM',
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicleCcm", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'VEHICLE_TRANSSMISION_TYPE',
        nullable: true,
        length: 16,
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicleTranssmisionType", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'VEHICLE_GEAR_NUMBER',
        nullable: true,
        precision: 8,
        scale: 0,
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicleGearNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'VEHICLE_REG_NUMBER', nullable: true, length: 16 }),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicleRegNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'CREATED_AT' }),
    __metadata("design:type", Date)
], Vehicle.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'UPDATED_AT', nullable: true }),
    __metadata("design:type", Date)
], Vehicle.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'DELETED_AT', nullable: true }),
    __metadata("design:type", Date)
], Vehicle.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Ticket_1.Ticket, (ticket) => ticket.vehilce, { eager: true }),
    __metadata("design:type", Array)
], Vehicle.prototype, "tickets", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customer_1.Customer, (customer) => customer.vehicles, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'CUSTOMER_ID', referencedColumnName: 'customerId' }]),
    __metadata("design:type", Customer_1.Customer)
], Vehicle.prototype, "customer", void 0);
Vehicle = __decorate([
    (0, typeorm_1.Index)('FK_VEHICLE_CUSTOMERS_CUSTOMER', ['customerId'], {}),
    (0, typeorm_1.Entity)('VEHICLE', { schema: 'strax' })
], Vehicle);
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map