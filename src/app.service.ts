import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Halo Welcome Daebak Food, Please Login To Access API!';
  }
}
