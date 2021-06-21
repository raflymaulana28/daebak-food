import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop({ required: true })
  name: string;
  @Prop()
  description?: string;
  @Prop()
  imageUrl?: string;

  @Prop({ type: [Types.ObjectId], ref: 'product' })
  products?: string[];

  @Prop()
  longitude?: number;
  @Prop()
  latitude?: number;
  @Prop()
  city?: string;
  @Prop()
  country?: string;
  @Prop()
  address?: string;
  @Prop()
  postcode?: string;
  @Prop()
  isPromo?: boolean;
  @Prop()
  rating?: number;
  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
