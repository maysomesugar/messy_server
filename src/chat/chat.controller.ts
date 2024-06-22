import { Controller } from '@nestjs/common';
import { Chat } from 'src/schemas/chat.schema';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService){}

    async getChats() : Promise<Chat[]>{
        return this.chatService.getChats();
    }
}
