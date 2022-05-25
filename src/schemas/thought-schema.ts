import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ThoughtDocument = Thought & Document;

@Schema()
export class Thought {
  @Prop({ required: true, minlength: 5, maxlength: 140, trim: true })
  message: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ default: 0 })
  hearts: number;
}

export const ThoughtSchema = SchemaFactory.createForClass(Thought);
