import { OnApplicationBootstrap } from '@nestjs/common';
export declare class BackendConnectionService implements OnApplicationBootstrap {
    private client;
    constructor();
    onApplicationBootstrap(): Promise<void>;
    getConnectionToBackend(): Promise<void>;
    receiveTestMessage(message: string): boolean;
    sendTestAlertToBackend(message: string): Promise<any>;
}
