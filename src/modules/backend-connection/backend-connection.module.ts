import { Module } from '@nestjs/common';
import { BackendConnectionService } from './backend-connection.service';
import { BackendConnectionController } from './backend-connection.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [],
  providers: [BackendConnectionService],
  controllers: [BackendConnectionController]
})
export class BackendConnectionModule {}
