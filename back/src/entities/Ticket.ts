import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Vehicle } from './Vehicle';

@Index('FK_TICKET_VEHICLES__VEHICLE', ['vehilceId'], {})
@Entity('TICKET', { schema: 'strax' })
export class Ticket {
  @Column('int', { primary: true, name: 'TICKET_ID' })
  ticketId: number;

  @Column('int', { name: 'VEHILCE_ID' })
  vehilceId: number;

  @Column('text', { name: 'DIAGNOSTIC_METHOD', nullable: true })
  diagnosticMethod: string | null;

  @Column('text', { name: 'DIAGNOSED_ERROR', nullable: true })
  diagnosedError: string | null;

  @Column('text', { name: 'TICKET_DESCRIPTION', nullable: true })
  ticketDescription: string | null;

  @Column('text', { name: 'TODO', nullable: true })
  todo: string | null;

  @Column('text', { name: 'READED_FILE', nullable: true })
  readedFile: string | null;

  @Column('text', { name: 'DIAGNOSED_ERRORS_AFTER_TUNING', nullable: true })
  diagnosedErrorsAfterTuning: string | null;

  @Column('varchar', { name: 'CHARGED', nullable: true, length: 16 })
  charged: string | null;

  @Column('timestamp', { name: 'CREATED_AT' })
  createdAt: Date;

  @Column('timestamp', { name: 'UPDATED_AT', nullable: true })
  updatedAt: Date | null;

  @Column('timestamp', { name: 'DELETED_AT', nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.tickets, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'VEHILCE_ID', referencedColumnName: 'vehilceId' }])
  vehilce: Vehicle;
}
