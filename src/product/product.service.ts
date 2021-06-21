import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Restaurant,
  RestaurantDocument,
} from 'src/restaurant/schemas/restaurant.schemas';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly model: Model<ProductDocument>,
    @InjectModel(Restaurant.name)
    private readonly restaurant: Model<RestaurantDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProd = await new this.model({
      ...createProductDto,
      createdAt: new Date(),
    }).save();
    if (createProductDto.restaurant) {
      for (let item of createProductDto.restaurant) {
        const rest = await this.restaurant.findById(item);
        let newProducts = rest.products;
        newProducts.push(newProd._id);
        await this.restaurant.findByIdAndUpdate(item, {
          ...rest,
          products: newProducts,
        });
      }
    }

    return newProd;
  }

  async findAll(): Promise<Product[]> {
    return await this.model
      .find()
      .populate({
        path: 'restaurant',
        model: 'Restaurant',
      })
      .exec();
  }

  async findOne(id: string): Promise<Product> {
    return await this.model.findById(id).exec();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.model.findByIdAndUpdate(id, updateProductDto);
  }

  async delete(id: string): Promise<Product> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
