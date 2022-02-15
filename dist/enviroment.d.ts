import { Transport } from "@nestjs/microservices";
export declare let environment: {
    publicFolderUrl: string;
    hostname: string;
    apiVersion: string;
    morganLogType: string;
    globalPrefix: string;
    microserviceConfig: {
        transport: Transport;
        options: {
            host: string;
            port: number;
        };
    };
};
