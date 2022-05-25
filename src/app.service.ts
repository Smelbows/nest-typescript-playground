import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "View the happy thoughts frontend at: https://sarah-mottram-happy-thoughts.netlify.app/";
  }
}
