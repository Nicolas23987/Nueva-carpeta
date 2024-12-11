import { Module } from '@nestjs/common';
import { CocineroModule } from './cocinero/cocinero.module';
import { RecetaModule } from './receta/receta.module';
import { PreparacionModule } from './preparacion/preparacion.module';

@Module({
  controllers: [],
  providers: [],
  imports: [CocineroModule, RecetaModule, PreparacionModule],
})
export class PrepararRecetaModule {}
