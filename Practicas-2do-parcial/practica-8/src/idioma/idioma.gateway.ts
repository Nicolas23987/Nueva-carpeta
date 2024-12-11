import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { IdiomaService } from './idioma.service';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Server } from 'socket.io';

@WebSocketGateway({cors: true})
export class IdiomaGateway {
  constructor(private readonly idiomaService: IdiomaService) {}

  @WebSocketServer()
  wss: Server;

  @SubscribeMessage('createIdioma')
  async create(@MessageBody() createIdiomaDto: CreateIdiomaDto) {
    const idioma = await this.idiomaService.create(createIdiomaDto);
    this.wss.emit('idiomaCreated', idioma);
    return idioma;
  }

  @SubscribeMessage('findAllIdioma')
  async findAll() {
    const idiomas = await this.idiomaService.findAll();
    this.wss.emit('allIdiomas', idiomas);
    return idiomas;
  }

  @SubscribeMessage('findOneIdioma')
  async findOne(@MessageBody() id: number) {
    const idioma = await this.idiomaService.findOne(id);
    if (idioma) {
      this.wss.emit('idiomaFound', idioma);
    }
    return idioma;
  }

  @SubscribeMessage('updateIdioma')
  async update(@MessageBody() updateIdiomaDto: UpdateIdiomaDto) {
    const updatedIdioma = await this.idiomaService.update(
      updateIdiomaDto.id,
      updateIdiomaDto,
    );
    console.log(updatedIdioma)
    this.wss.emit('idiomaUpdated', updatedIdioma);
    return updatedIdioma;
  }

  @SubscribeMessage('removeIdioma')
  async remove(@MessageBody() id: number) {
    const removedIdioma = await this.idiomaService.remove(id);
    this.wss.emit('idiomaRemoved', removedIdioma);
    return removedIdioma;
  }
}
