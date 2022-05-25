import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThoughtsModule } from './thoughts/thoughts.module';

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost/nest';

@Module({
  imports: [MongooseModule.forRoot(mongoURL), ThoughtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
