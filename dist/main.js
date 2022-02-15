"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const mqtt = require("mqtt");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.MQTT,
        options: {
            url: "mqtt://192.168.68.59:1883",
            clean: true,
            connectTimeout: 4000,
            reconnectPeriod: 1000,
        },
    });
    const host = "192.168.68.59";
    const port = "1883";
    const connectUrl = `mqtt://${host}:${port}`;
    const client = mqtt.connect(connectUrl, {
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 1000,
    });
    const topic = "tost";
    client.on("connect", () => {
        console.log("Connected");
        client.subscribe([topic], () => {
            console.log(`Subscribe to topic '${topic}'`);
        });
        client.publish(topic, "nodejs mqtt test", { qos: 0, retain: false }, (error) => {
            if (error) {
                console.error(error);
            }
        });
    });
    client.on("message", (topic, payload) => {
        console.log("Received Message:", topic, payload.toString());
    });
    await app.listenAsync();
}
bootstrap();
//# sourceMappingURL=main.js.map