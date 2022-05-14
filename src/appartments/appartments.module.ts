import { Module } from '@nestjs/common';
import { AppartmentsService } from './appartments.service';
import { AppartmentsResolver } from './appartments.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Appartment, AppartmentSchema } from 'src/schemas/appartments.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Appartment.name, schema: AppartmentSchema }])],
  providers: [AppartmentsResolver, AppartmentsService]
})
export class AppartmentsModule {}
