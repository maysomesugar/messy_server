import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
  @Prop({ default: false })
  isDiscussion: boolean;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
