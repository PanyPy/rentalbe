import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AppartmentsService } from './appartments.service';
import { Appartment } from './entities/appartment.entity';
import { CreateAppartmentInput } from './dto/create-appartment.input';
import { UpdateAppartmentInput } from './dto/update-appartment.input';

@Resolver(() => Appartment)
export class AppartmentsResolver {
  constructor(private readonly appartmentsService: AppartmentsService) {}

  @Mutation(() => Appartment)
  createAppartment(@Args('createAppartmentInput') createAppartmentInput: CreateAppartmentInput) {
    return this.appartmentsService.create(createAppartmentInput);
  }

  @Query(() => [Appartment], { name: 'appartments' })
  findAll() {
    return this.appartmentsService.findAll();
  }

  @Query(() => Appartment, { name: 'appartment' })
  findOne(@Args('id') id: string) {
    return this.appartmentsService.findOne(id);
  }

  @Mutation(() => Appartment)
  updateAppartment(@Args('updateAppartmentInput') updateAppartmentInput: UpdateAppartmentInput) {
    return this.appartmentsService.update(updateAppartmentInput._id, updateAppartmentInput);
  }

  @Mutation(() => Appartment)
  removeAppartment(@Args('id') id: string) {
    return this.appartmentsService.remove(id);
  }
}
