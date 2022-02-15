import { BackendConnectionService } from './backend-connection.service';
export declare class BackendConnectionController {
    private backendConnectionService;
    constructor(backendConnectionService: BackendConnectionService);
    receiveTestMessage(data: {
        message: string;
    }): Promise<Boolean>;
}
