import { Test, TestingModule } from '@nestjs/testing';
import { AppartmentsResolver } from './appartments.resolver';
import { AppartmentsService } from './appartments.service';

describe('AppartmentsResolver', () => {
  let resolver: AppartmentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppartmentsResolver, AppartmentsService],
    }).compile();

    resolver = module.get<AppartmentsResolver>(AppartmentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
