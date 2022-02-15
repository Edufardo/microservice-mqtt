import { Controller, Inject } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { MqttClient } from 'mqtt';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}
  

}
