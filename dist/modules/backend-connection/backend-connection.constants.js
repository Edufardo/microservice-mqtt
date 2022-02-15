"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_MICROSERVICE_PATTERNS = exports.MICROSERVICE_TO_BACKEND_CLIENT_MODULE_CONFIGURATION = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.MICROSERVICE_TO_BACKEND_CLIENT_MODULE_CONFIGURATION = {
    transport: microservices_1.Transport.TCP,
    options: {
        host: '0.0.0.0',
        port: 3000,
    },
};
exports.BASE_MICROSERVICE_PATTERNS = {
    MESSAGES_HANDLERS: {
        SEND_MESSAGE: { controller: 'sendMessage' },
        SEND_ALERT: { controller: 'sendAlert' },
    },
};
//# sourceMappingURL=backend-connection.constants.js.map