import { Transport } from "@nestjs/microservices";


// const NODE_ENV = process.env.NODE_ENV
//   ? process.env.NODE_ENV.toUpperCase()
//   : 'DEV';

export let environment = {
  publicFolderUrl: '',
  hostname: '0.0.0.0',
  apiVersion: 'v1',
  morganLogType: 'common',
  globalPrefix: 'api',
  microserviceConfig: {
    transport: Transport.MQTT,
    options: {
      host: '0.0.0.0',
      port: 8878,
    },
  },
};

