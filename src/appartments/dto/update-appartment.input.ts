import { CreateAppartmentInput } from './create-appartment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAppartmentInput extends PartialType(CreateAppartmentInput) {
  @Field()
  _id: string;
}
