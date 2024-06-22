import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';
import { AppService } from 'src/app.service';
import { WebsocketsSettings } from '../settings/websocket.settings';

@WebSocketGateway(WebsocketsSettings.port, {
  namespace: 'messages',
  cors: { origin: '*' },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly appService: AppService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('messageFromClient')
  handleMessage(client: Socket, payload: any) {
    this.server.emit('messageFromServer', payload);
  }

  afterInit(server: Server) {
    console.log(server);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Connected ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
  }
}
