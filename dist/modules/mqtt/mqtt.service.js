"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let MqttService = class MqttService {
    constructor(client) {
        this.client = client;
    }
    async sendHello(payload) {
        this.client.connect();
        console.log("Connected");
        console.log("Envio este mensaje...", payload);
        this.client.emit("test", payload);
        return "Hello World!";
    }
};
MqttService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("TELEGRAM_ALERTS")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], MqttService);
exports.MqttService = MqttService;
//# sourceMappingURL=mqtt.service.js.map