import { Test, TestingModule } from '@nestjs/testing';
import { ControlActivosService } from './control_activos.service';

describe('ControlActivosService', () => {
  let service: ControlActivosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControlActivosService],
    }).compile();

    service = module.get<ControlActivosService>(ControlActivosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
