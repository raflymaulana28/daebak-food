import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly service: RestaurantService) {}
  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return await this.service.create(createRestaurantDto);
  }
}
