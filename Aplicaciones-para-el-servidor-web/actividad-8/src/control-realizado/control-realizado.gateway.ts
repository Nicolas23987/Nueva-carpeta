import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { ControlRealizadoService } from './control-realizado.service';
import { CreateControlRealizadoDto } from './dto/create-control-realizado.dto';
import { UpdateControlRealizadoDto } from './dto/update-control-realizado.dto';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ControlRealizadoGateway {
  constructor(private readonly controlRealizadoService: ControlRealizadoService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('createControlRealizado')
  async create(@MessageBody() createControlRealizadoDto: CreateControlRealizadoDto) {
    const result = await this.controlRealizadoService.create(createControlRealizadoDto);
    this.server.emit('controlRealizadoCreated', result);  
    return result;
  }

  @SubscribeMessage('findAllControlRealizado')
  async findAll() {
    const result = await this.controlRealizadoService.findAll();
    this.server.emit('allControlRealizados', result);  
    return result;
  }

  @SubscribeMessage('findOneControlRealizado')
  async findOne(@MessageBody() id: number) {
    const result = await this.controlRealizadoService.findOne(id);
    this.server.emit('controlRealizadoFound', result);  
    return result;
  }

  @SubscribeMessage('updateControlRealizado')
  async update(@MessageBody() updateControlRealizadoDto: UpdateControlRealizadoDto) {
    const result = await this.controlRealizadoService.update(updateControlRealizadoDto.id, updateControlRealizadoDto);
    this.server.emit('controlRealizadoUpdated', result); 
    return result;
  }

  @SubscribeMessage('removeControlRealizado')
  async remove(@MessageBody() id: number) {
    const result = await this.controlRealizadoService.remove(id);
    this.server.emit('controlRealizadoRemoved', result);  
    return result;
  }

}