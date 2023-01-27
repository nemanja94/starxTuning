import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Ticket } from './Ticket';
import { Customer } from './Customer';

@Index('FK_VEHICLE_CUSTOMERS_CUSTOMER', ['customerId'], {})
@Entity('VEHICLE', { schema: 'strax' })
export class Vehicle {
  @Column('int', { primary: true, name: 'VEHILCE_ID' })
  vehilceId: number;

  @Column('int', { name: 'CUSTOMER_ID' })
  customerId: number;

  @Column('varchar', { name: 'VEHICLE_BRAND', nullable: true, length: 32 })
  vehicleBrand: string | null;

  @Column('varchar', { name: 'VEHICLE_MODEL', nullable: true, length: 32 })
  vehicleModel: string | null;

  @Column('decimal', {
    name: 'VEHICLE_POWER',
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vehiclePower: string | null;

  @Column('decimal', {
    name: 'VEHICLE_CCM',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  vehicleCcm: string | null;

  @Column('varchar', {
    name: 'VEHICLE_TRANSSMISION_TYPE',
    nullable: true,
    length: 16,
  })
  vehicleTranssmisionType: string | null;

  @Column('decimal', {
    name: 'VEHICLE_GEAR_NUMBER',
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vehicleGearNumber: string | null;

  @Column('varchar', { name: 'VEHICLE_REG_NUMBER', nullable: true, length: 16 })
  vehicleRegNumber: string | null;

  @Column('timestamp', { name: 'CREATED_AT' })
  createdAt: Date;

  @Column('timestamp', { name: 'UPDATED_AT', nullable: true })
  updatedAt: Date | null;

  @Column('timestamp', { name: 'DELETED_AT', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Ticket, (ticket) => ticket.vehilce, { eager: true })
  tickets: Ticket[];

  @ManyToOne(() => Customer, (customer) => customer.vehicles, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'CUSTOMER_ID', referencedColumnName: 'customerId' }])
  customer: Customer;
}
