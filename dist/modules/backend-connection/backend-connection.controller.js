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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendConnectionController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const backend_connection_constants_1 = require("./backend-connection.constants");
const backend_connection_service_1 = require("./backend-connection.service");
let BackendConnectionController = class BackendConnectionController {
    constructor(backendConnectionService) {
        this.backendConnectionService = backendConnectionService;
    }
    async receiveTestMessage(data) {
        console.log('Message Received from Backend -->');
        return this.backendConnectionService.receiveTestMessage(data.message);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)(backend_connection_constants_1.BASE_MICROSERVICE_PATTERNS.MESSAGES_HANDLERS.SEND_MESSAGE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BackendConnectionController.prototype, "receiveTestMessage", null);
BackendConnectionController = __decorate([
    (0, common_1.Controller)('backend-connection'),
    __metadata("design:paramtypes", [backend_connection_service_1.BackendConnectionService])
], BackendConnectionController);
exports.BackendConnectionController = BackendConnectionController;
//# sourceMappingURL=backend-connection.controller.js.map