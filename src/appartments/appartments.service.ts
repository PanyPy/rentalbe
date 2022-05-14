import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Appartment, AppartmentDocument } from 'src/schemas/appartments.schema';
import { CreateAppartmentInput } from './dto/create-appartment.input';
import { UpdateAppartmentInput } from './dto/update-appartment.input';

@Injectable()
export class AppartmentsService {
  constructor(@InjectModel(Appartment.name) private appartmenttModel: Model<AppartmentDocument>) {}

  create(createAppartmentInput: CreateAppartmentInput) {
    const created = new this.appartmenttModel(createAppartmentInput);
    return created.save();
  }

  findAll() {
    return this.appartmenttModel.find().exec();
  }

  findOne(id: string) {
    return this.appartmenttModel.findById(id).exec();
  }

  update(id: string, updateAppartmentInput: UpdateAppartmentInput) {
    this.appartmenttModel.findOneAndUpdate({ _id: id }, updateAppartmentInput).exec();
    return this.appartmenttModel.findById(id).exec();
  }

  remove(id: string) {
    return this.appartmenttModel.findOneAndRemove({ _id: id });
  }
}
