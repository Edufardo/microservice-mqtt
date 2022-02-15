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
exports.MqttController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const mqtt_service_1 = require("./mqtt.service");
let MqttController = class MqttController {
    constructor(mqttService, client) {
        this.mqttService = mqttService;
        this.client = client;
    }
    async onApplicationBootstrap() {
        this.client.connect();
    }
    sendMsg(payload, ctx) {
        console.log('Envío esto...', payload);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('test'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, microservices_1.MqttContext]),
    __metadata("design:returntype", void 0)
], MqttController.prototype, "sendMsg", null);
MqttController = __decorate([
    (0, common_1.Controller)(),
    __param(1, (0, common_1.Inject)('TELEGRAM_ALERTS')),
    __metadata("design:paramtypes", [mqtt_service_1.MqttService,
        microservices_1.ClientProxy])
], MqttController);
exports.MqttController = MqttController;
//# sourceMappingURL=mqtt.controller.js.map