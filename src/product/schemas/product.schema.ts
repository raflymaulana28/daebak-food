import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Restaurant } from 'src/restaurant/schemas/restaurant.schemas';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;
  @Prop()
  description?: string;
  @Prop()
  imageUrl?: string;
  @Prop()
  price?: number;
  @Prop()
  discountPrice?: number;
  @Prop()
  regularPrice?: number;
  @Prop({ type: Types.ObjectId, ref: 'category' })
  category?: Types.ObjectId;
  @Prop({ type: [Types.ObjectId], ref: 'Restaurant' })
  restaurant?: string[];
  @Prop({ type: [Types.ObjectId], ref: 'variant' })
  variant?: string[];
  @Prop()
  rating?: number;
  @Prop()
  stars?: number;
  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
