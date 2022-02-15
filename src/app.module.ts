import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BackendConnectionModule } from "./modules/backend-connection/backend-connection.module";
import { MqttModule } from "./modules/mqtt/mqtt.module";

@Module({
  imports: [
    BackendConnectionModule,
    MqttModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
