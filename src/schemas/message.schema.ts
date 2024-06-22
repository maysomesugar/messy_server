import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { User } from './user.schema';
import { Chat } from './chat.schema';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop({ required: true })
  text: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  user: ObjectId;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Chat.name,
  })
  chat: ObjectId;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
