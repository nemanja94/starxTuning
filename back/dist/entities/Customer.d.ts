import { Vehicle } from './Vehicle';
export declare class Customer {
    customerId: number;
    customerName: string | null;
    customerSurname: string | null;
    customerPhone: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    vehicles: Vehicle[];
}
