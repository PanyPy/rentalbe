import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAppartmentInput {
  @Field()
  city: string;

  @Field({nullable: true})
  address: string;

  @Field({nullable: true })
  rooms: number;

  @Field()
  price: number;

  @Field()
  hasAir: boolean;

  @Field()
  hasElevator: boolean;

  @Field()
  hasParking: boolean;
}
