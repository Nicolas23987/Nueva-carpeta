import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { SignoVitalService } from './signo-vital.service';
import { CreateSignoVitalDto } from './dto/create-signo-vital.dto';
import { UpdateSignoVitalDto } from './dto/update-signo-vital.dto';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SignoVitalGateway {
  constructor(private readonly signoVitalService: SignoVitalService) {}

  @WebSocketServer()
  private server: Server;

  @SubscribeMessage('createSignoVital')
  async create(@MessageBody() createSignoVitalDto: CreateSignoVitalDto) {
    const result = await this.signoVitalService.create(createSignoVitalDto);
    this.server.emit('signoVitalCreado', result);
    return result;
  }

  @SubscribeMessage('findAllSignoVital')
  async findAll() {
    const result = await this.signoVitalService.findAll();
    this.server.emit('todosLosSignosVitales', result);
    return result;
  }

  @SubscribeMessage('findOneSignoVital')
  async findOne(@MessageBody() id: number) {
    const result = await this.signoVitalService.findOne(id);
    this.server.emit('signoVitalEncontrado', result);
    return result;
  }

  @SubscribeMessage('updateSignoVital')
  async update(@MessageBody() updateSignoVitalDto: UpdateSignoVitalDto) {
    const result = await this.signoVitalService.update(updateSignoVitalDto.id, updateSignoVitalDto);
    this.server.emit('signoVitalActualizado', result);
    return result;
  }

  @SubscribeMessage('removeSignoVital')
  async remove(@MessageBody() id: number) {
    const result = await this.signoVitalService.remove(id);
    this.server.emit('signoVitalEliminado', result);
    return result;
  }
}
