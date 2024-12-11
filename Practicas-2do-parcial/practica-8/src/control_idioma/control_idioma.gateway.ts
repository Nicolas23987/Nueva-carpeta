import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { ControlIdiomaService } from './control_idioma.service';
import { CreateControlIdiomaDto } from './dto/create-control_idioma.dto';
import { UpdateControlIdiomaDto } from './dto/update-control_idioma.dto';
import { Server } from 'socket.io';

@WebSocketGateway({cors: true})
export class ControlIdiomaGateway {
  constructor(private readonly controlIdiomaService: ControlIdiomaService) {}

  @WebSocketServer()
  wss: Server;

  @SubscribeMessage('createControlIdioma')
  async create(@MessageBody() createControlIdiomaDto: CreateControlIdiomaDto) {
    const control = await this.controlIdiomaService.create(createControlIdiomaDto);
    this.wss.emit('controlIdiomaCreated', control);
    return control;
  }
  
  @SubscribeMessage('findAllControlIdioma')
  async findAll() {
    const controls = await this.controlIdiomaService.findAll();
    console.log(controls)
    this.wss.emit('allControlIdioma', controls);
    return controls;
  }
  
  @SubscribeMessage('findOneControlIdioma')
  async findOne(@MessageBody() id: number) {
    const control = await this.controlIdiomaService.findOne(id);
    if (control) {
      this.wss.emit('controlIdiomaFound', control);
    }
    return control;
  }
  
  @SubscribeMessage('updateControlIdioma')
  async update(@MessageBody() updateControlIdiomaDto: UpdateControlIdiomaDto) {
    const updatedControl = await this.controlIdiomaService.update(
      updateControlIdiomaDto.id, 
      updateControlIdiomaDto
    );
    this.wss.emit('controlIdiomaUpdated', updatedControl);
    return updatedControl;
  }
  
  // Remove a control idioma entry and emit the event
  @SubscribeMessage('removeControlIdioma')
  async remove(@MessageBody() id: number) {
    const removedControl = await this.controlIdiomaService.remove(id);
    this.wss.emit('controlIdiomaRemoved', removedControl);
    return removedControl;
  }
}
