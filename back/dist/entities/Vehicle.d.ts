import { Ticket } from './Ticket';
import { Customer } from './Customer';
export declare class Vehicle {
    vehilceId: number;
    customerId: number;
    vehicleBrand: string | null;
    vehicleModel: string | null;
    vehiclePower: string | null;
    vehicleCcm: string | null;
    vehicleTranssmisionType: string | null;
    vehicleGearNumber: string | null;
    vehicleRegNumber: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    tickets: Ticket[];
    customer: Customer;
}
