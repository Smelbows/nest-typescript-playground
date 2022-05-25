import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost/nest';

@Module({
  imports: [MongooseModule.forRoot(mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
