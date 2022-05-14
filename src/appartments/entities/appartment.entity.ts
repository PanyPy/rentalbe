import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Appartment {
  @Field()
  _id: string;

  @Field()
  city: string;

  @Field({nullable: true})
  address: string;

  @Field({nullable: true })
  rooms: number;

  @Field()
  price: number;

  // pooly designed, just to accomplish requirements in short time.
  @Field()
  hasAir?: boolean;

  @Field()
  hasElevator?: boolean;

  @Field()
  hasParking?: boolean;
}
