import { Vehicle } from './Vehicle';
export declare class Ticket {
    ticketId: number;
    vehilceId: number;
    diagnosticMethod: string | null;
    diagnosedError: string | null;
    ticketDescription: string | null;
    todo: string | null;
    readedFile: string | null;
    diagnosedErrorsAfterTuning: string | null;
    charged: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    vehilce: Vehicle;
}
