import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This site is not mean to be visited, use FE!';
  }
}
