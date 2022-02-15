import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import {
  BASE_MICROSERVICE_PATTERNS,
  MICROSERVICE_TO_BACKEND_CLIENT_MODULE_CONFIGURATION,
} from './backend-connection.constants';

@Injectable()
export class BackendConnectionService implements OnApplicationBootstrap {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(
      MICROSERVICE_TO_BACKEND_CLIENT_MODULE_CONFIGURATION,
    );
  }

  async onApplicationBootstrap() {
    this.getConnectionToBackend();
  }

  async getConnectionToBackend() {
    try {
      await this.client.connect();
    } catch (error) {
      const errorText = error.message;
      console.log(errorText);
      if (errorText.includes('ECONNREFUSED')) {
        console.log('CONEXIÓN RECHAZADA POR EL BACKEND');
      } else if (errorText.includes('EADDRINUSE')) {
        console.log('EL PUERTO YA ESTÁ EN USO EN EL SISTEMA POR OTRO PROCESO');
      } else {
        console.log(errorText);
      }
    }
  }

  receiveTestMessage(message: string) {
    //Message from the backend
    console.log(message);
    //Return true if everything OK
    this.sendTestAlertToBackend(
      'This is a message sent from Microservice to Backend.',
    );
    return true;
  }

  //Send alert to Backend
  sendTestAlertToBackend(message: string) {
    // Get the connection use it for each message
    this.getConnectionToBackend();
    // Send Message
    return this.client
      .emit(BASE_MICROSERVICE_PATTERNS.MESSAGES_HANDLERS.SEND_ALERT, {
        data: message,
      })
      .toPromise(); //ojo importante ponerlo para que se haga correctamente
  }
}
