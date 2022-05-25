import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Thought, ThoughtDocument } from './schemas/thought-schema';

@Injectable()
export class ThoughtsService {
  constructor(
    @InjectModel(Thought.name) private thoughtModel: Model<ThoughtDocument>,
  ) {}

  async create(message: string): Promise<Thought> {
    const createdThought = new this.thoughtModel(message);
    return createdThought.save();
  }

  async findAll(): Promise<Thought[]> {
    return this.thoughtModel
      .find()
      .sort({ createdAt: 'desc' })
      .limit(20)
      .exec();
  }

  async findAndUpdate(thoughtId: string): Promise<Thought> {
    return this.thoughtModel.findByIdAndUpdate(
      thoughtId,
      {
        $inc: { hearts: 1 },
      },
      { new: true },
    );
  }
}
