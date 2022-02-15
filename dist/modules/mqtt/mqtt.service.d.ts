import { ClientProxy } from "@nestjs/microservices";
export declare class MqttService {
    private client;
    constructor(client: ClientProxy);
    sendHello(payload: string): Promise<string>;
}
