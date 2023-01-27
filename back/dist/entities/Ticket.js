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
exports.Ticket = void 0;
const typeorm_1 = require("typeorm");
const Vehicle_1 = require("./Vehicle");
let Ticket = class Ticket {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'TICKET_ID' }),
    __metadata("design:type", Number)
], Ticket.prototype, "ticketId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'VEHILCE_ID' }),
    __metadata("design:type", Number)
], Ticket.prototype, "vehilceId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'DIAGNOSTIC_METHOD', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "diagnosticMethod", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'DIAGNOSED_ERROR', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "diagnosedError", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'TICKET_DESCRIPTION', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "ticketDescription", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'TODO', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "todo", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'READED_FILE', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "readedFile", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'DIAGNOSED_ERRORS_AFTER_TUNING', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "diagnosedErrorsAfterTuning", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CHARGED', nullable: true, length: 16 }),
    __metadata("design:type", String)
], Ticket.prototype, "charged", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'CREATED_AT' }),
    __metadata("design:type", Date)
], Ticket.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'UPDATED_AT', nullable: true }),
    __metadata("design:type", Date)
], Ticket.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'DELETED_AT', nullable: true }),
    __metadata("design:type", Date)
], Ticket.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Vehicle_1.Vehicle, (vehicle) => vehicle.tickets, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'VEHILCE_ID', referencedColumnName: 'vehilceId' }]),
    __metadata("design:type", Vehicle_1.Vehicle)
], Ticket.prototype, "vehilce", void 0);
Ticket = __decorate([
    (0, typeorm_1.Index)('FK_TICKET_VEHICLES__VEHICLE', ['vehilceId'], {}),
    (0, typeorm_1.Entity)('TICKET', { schema: 'strax' })
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=Ticket.js.map