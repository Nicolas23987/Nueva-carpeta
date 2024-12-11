import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors: true})
export class EstudianteGateway implements OnGatewayConnection, OnGatewayDisconnect{
  constructor(private readonly estudianteService: EstudianteService) {}
  
  private connectedClients: Map<string, Socket> = new Map(); 

  @WebSocketServer()
  wss: Server;

  handleConnection(client: Socket) {
    this.connectedClients.set(client.id, client);
    console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.connectedClients.delete(client.id);
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('createEstudiante')
  async create(@MessageBody() createEstudianteDto: CreateEstudianteDto) {
    const estudiante = await this.estudianteService.create(createEstudianteDto);
    this.wss.emit('estudianteCreated', estudiante);
    return estudiante;
  }

  @SubscribeMessage('findAllEstudiante')
  async findAll() {
    const estudiantes = await this.estudianteService.findAll();
    this.wss.emit('allEstudiantes', estudiantes);
    return estudiantes;
  }

  @SubscribeMessage('findOneEstudiante')
  async findOne(@MessageBody() id: number) {
    const estudiante = await this.estudianteService.findOne(id);
    if (estudiante) {
      this.wss.emit('estudianteFound', estudiante);
    }
    return estudiante;
  }

  @SubscribeMessage('updateEstudiante')
  async update(@MessageBody() updateEstudianteDto: UpdateEstudianteDto) {
    const updatedEstudiante = await this.estudianteService.update(
      updateEstudianteDto.id,
      updateEstudianteDto,
    );
    this.wss.emit('estudianteUpdated', updatedEstudiante);
    return updatedEstudiante;
  }

  @SubscribeMessage('removeEstudiante')
  async remove(@MessageBody() id: number) {
    const removedEstudiante = await this.estudianteService.remove(id);
    this.wss.emit('estudianteRemoved', removedEstudiante);
    return removedEstudiante;
  }
}
