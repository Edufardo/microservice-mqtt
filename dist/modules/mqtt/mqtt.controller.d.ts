import { ClientProxy, MqttContext } from '@nestjs/microservices';
import { MqttService } from './mqtt.service';
export declare class MqttController {
    private readonly mqttService;
    private client;
    constructor(mqttService: MqttService, client: ClientProxy);
    onApplicationBootstrap(): Promise<void>;
    sendMsg(payload: string, ctx: MqttContext): void;
}
