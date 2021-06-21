import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModule } from './restaurant/restaurant.module';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [
    ProductModule,
    RestaurantModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.4susw.mongodb.net/daebakFoodDev?retryWrites=true&w=majority',
    ),
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
