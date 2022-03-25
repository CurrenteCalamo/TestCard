import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardDto } from './dto/card.dto';
import { Card, CardDocument } from './schemas/card.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

  async create(dto: CardDto) {
    const card = await this.cardModel.create(dto);
    return { RequestId: card._id, Amount: card.Amount };
  }
}
