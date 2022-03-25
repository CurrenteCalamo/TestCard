import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop()
  CardNumber: string;

  @Prop()
  Amount: string;

  @Prop()
  ExpirationDate: string;

  @Prop()
  CW: string;
}
export const CardShema = SchemaFactory.createForClass(Card);
