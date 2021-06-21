export class BaseRestaurantDto {
  name: string;
  description: string;
  imageUrl?: string;
  products?: Array<string>;
  city?: string;
  country?: string;
  address?: string;
  postcode?: string;
  longitude?: number;
  latitude?: number;
  isPromo?: boolean;
  rating?: number;
}
