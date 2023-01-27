import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TicketsModule } from './tickets/tickets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/Customer';
import { Vehicle } from './entities/Vehicle';
import { Ticket } from './entities/Ticket';

@Module({
  imports: [
    CustomersModule,
    VehiclesModule,
    TicketsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@1211',
      database: 'strax',
      entities: [Customer, Vehicle, Ticket],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
