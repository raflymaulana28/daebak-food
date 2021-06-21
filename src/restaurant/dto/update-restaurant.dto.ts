import { BaseRestaurantDto } from './base-restaurant.dto';

export class UpdateRestaurantDto extends BaseRestaurantDto {
  completedAt: Date;
}
