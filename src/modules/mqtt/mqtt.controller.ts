import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, Ctx, EventPattern, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { MqttClient } from 'mqtt';
import { MqttService } from './mqtt.service';

@Controller()
export class MqttController {
  constructor(
    private readonly mqttService: MqttService,
    @Inject('TELEGRAM_ALERTS') private client : ClientProxy
  ) {
  }
  
  async onApplicationBootstrap(){
    this.client.connect()
  }

  @MessagePattern('test')
  sendMsg(@Payload() payload: string, @Ctx() ctx: MqttContext){
    console.log('Envío esto...', payload)
  }
}