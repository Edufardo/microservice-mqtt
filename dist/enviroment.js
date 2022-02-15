"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.environment = {
    publicFolderUrl: '',
    hostname: '0.0.0.0',
    apiVersion: 'v1',
    morganLogType: 'common',
    globalPrefix: 'api',
    microserviceConfig: {
        transport: microservices_1.Transport.MQTT,
        options: {
            host: '0.0.0.0',
            port: 8878,
        },
    },
};
//# sourceMappingURL=enviroment.js.map