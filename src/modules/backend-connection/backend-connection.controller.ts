import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BASE_MICROSERVICE_PATTERNS } from './backend-connection.constants';
import { BackendConnectionService } from './backend-connection.service';

@Controller('backend-connection')
export class BackendConnectionController {
  constructor(private backendConnectionService: BackendConnectionService) {}
  
  @MessagePattern(BASE_MICROSERVICE_PATTERNS.MESSAGES_HANDLERS.SEND_MESSAGE)
  async receiveTestMessage(data: { message: string }): Promise<Boolean> {
    console.log('Message Received from Backend -->', data);
    return this.backendConnectionService.receiveTestMessage(data.message);
  }
}
