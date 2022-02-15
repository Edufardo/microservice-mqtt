import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class MqttService {
  constructor(@Inject("TELEGRAM_ALERTS") private client: ClientProxy) {}

  async sendHello(payload:string) {
    this.client.connect();
    console.log("Connected");
    console.log("Envio este mensaje...", payload);
    this.client.emit("test", payload);
    return "Hello World!";
  }
}
