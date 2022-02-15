import { ClientOptions } from '@nestjs/microservices';
export declare const MICROSERVICE_TO_BACKEND_CLIENT_MODULE_CONFIGURATION: ClientOptions;
export declare const BASE_MICROSERVICE_PATTERNS: {
    MESSAGES_HANDLERS: {
        SEND_MESSAGE: {
            controller: string;
        };
        SEND_ALERT: {
            controller: string;
        };
    };
};
