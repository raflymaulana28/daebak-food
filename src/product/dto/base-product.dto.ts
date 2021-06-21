export class BaseProductDto {
  name: string;
  description: string;
  imageUrl?: string;
  price?: number;
  discountPrice?: number;
  regularPrice?: number;
  category?: string;
  restaurant?: Array<string>;
  variant?: Array<string>;
  rating?: number;
  stars?: number;
}
