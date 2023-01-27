import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { Vehicle } from './Vehicle';

@Entity('CUSTOMER', { schema: 'strax' })
export class Customer {
  @ApiProperty()
  @Column('int', { primary: true, name: 'CUSTOMER_ID' })
  customerId: number;

  @ApiProperty()
  @Column('varchar', { name: 'CUSTOMER_NAME', nullable: true, length: 32 })
  customerName: string | null;

  @ApiProperty()
  @Column('varchar', { name: 'CUSTOMER_SURNAME', nullable: true, length: 32 })
  customerSurname: string | null;

  @ApiProperty()
  @Column('varchar', { name: 'CUSTOMER_PHONE', nullable: true, length: 32 })
  customerPhone: string | null;

  @ApiProperty()
  @Column('timestamp', { name: 'CREATED_AT' })
  createdAt: Date;

  @ApiProperty()
  @Column('timestamp', { name: 'UPDATED_AT', nullable: true })
  updatedAt: Date | null;

  @ApiProperty()
  @Column('timestamp', { name: 'DELETED_AT', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.customer, { eager: true })
  vehicles: Vehicle[];
}
