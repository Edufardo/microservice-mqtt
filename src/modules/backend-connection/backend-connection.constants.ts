import { ClientOptions, Transport } from '@nestjs/microservices';

export const MICROSERVICE_TO_BACKEND_CLIENT_MODULE_CONFIGURATION: ClientOptions =
  {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3000, //Port in the backend
    },
  };

export const BASE_MICROSERVICE_PATTERNS = {
  // EVENTS_HANDLERS: {
  //   EMIT_TO_BASE_MICROSERVICE: { cmd: "emitToBaseMicroservice" },
  // },
  MESSAGES_HANDLERS: {
    SEND_MESSAGE: { controller: 'sendMessage' },
    SEND_ALERT: { controller: 'sendAlert' },
  },
};
