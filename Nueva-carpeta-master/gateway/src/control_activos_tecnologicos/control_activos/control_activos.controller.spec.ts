import { Test, TestingModule } from '@nestjs/testing';
import { ControlActivosController } from './control_activos.controller';
import { ControlActivosService } from './control_activos.service';

describe('ControlActivosController', () => {
  let controller: ControlActivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControlActivosController],
      providers: [ControlActivosService],
    }).compile();

    controller = module.get<ControlActivosController>(ControlActivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
