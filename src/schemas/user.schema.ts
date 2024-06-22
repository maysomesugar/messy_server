import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Chat } from './chat.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  avatar: string;

  @Prop()
  bornDate: Date;

  @Prop({
    default: [],
    type: [mongoose.Schema.Types.ObjectId],
    name: Chat.name,
  })
  chats: ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
