import { BaseProductDto } from './base-product.dto';

export class UpdateProductDto extends BaseProductDto {
  completedAt: Date;
}
