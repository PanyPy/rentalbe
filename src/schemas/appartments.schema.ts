import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppartmentDocument =Appartment & Document;

@Schema()
export class Appartment {
  @Prop()
  city: string;

  @Prop()
  address: string;

  @Prop()
  rooms: number;

  @Prop()
  price: number;

  @Prop()
  hasAir: boolean;

  @Prop()
  hasParking: number;

  @Prop()
  hasElevator: number;
}

export const AppartmentSchema = SchemaFactory.createForClass(Appartment);