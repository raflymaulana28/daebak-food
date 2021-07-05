import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant, RestaurantDocument } from './schemas/restaurant.schemas';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly model: Model<RestaurantDocument>,
  ) {}
  async create(createRestaurantDto: CreateRestaurantDto): Promise<Product> {
    return await new this.model({
      ...createRestaurantDto,
      createdAt: new Date(),
    }).save();
  }
  async findAll(): Promise<Restaurant[]> {
    return await this.model.find().exec();
  }
  async update(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return await this.model.findByIdAndUpdate(id, updateRestaurantDto, {
      new: true,
    });
  }
  async delete(id: string): Promise<{ message: string }> {
    const res = await this.model.findByIdAndDelete(id).exec();
    if (res) {
      return { message: 'Success Delete Restaurant!' };
    } else {
    }
  }
}
