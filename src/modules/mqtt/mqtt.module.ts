import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TELEGRAM_ALERTS',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://192.168.68.59:1883',
        }
      }
    ]),
  ],
  controllers: [MqttController],
  providers: [MqttService],
  exports: [MqttService]
})
export class MqttModule {}
