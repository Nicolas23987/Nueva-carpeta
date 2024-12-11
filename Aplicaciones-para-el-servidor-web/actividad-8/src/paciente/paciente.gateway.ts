import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class PacienteGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly pacienteService: PacienteService) {}

  @WebSocketServer()
  private server: Server;

  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
    this.server.emit('clienteConectado', { message: `Cliente con ID ${client.id} se ha conectado.` });
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
    this.server.emit('clienteDesconectado', { message: `Cliente con ID ${client.id} se ha desconectado.` });
  }

  @SubscribeMessage('createPaciente')
  async create(@MessageBody() createPacienteDto: CreatePacienteDto) {
    const result = await this.pacienteService.create(createPacienteDto);
    console.log('Paciente creado:', result);
    this.server.emit('pacienteCreado', { message: 'Nuevo paciente creado.', data: result });
    return result;
  }

  @SubscribeMessage('findAllPaciente')
  async findAll() {
    const result = await this.pacienteService.findAll();
    console.log('Todos los pacientes:', result);
    this.server.emit('todosLosPacientes', { message: 'Lista de todos los pacientes.', data: result });
    return result;
  }

  @SubscribeMessage('findOnePaciente')
  async findOne(@MessageBody() id: number) {
    const result = await this.pacienteService.findOne(id);
    console.log('Paciente encontrado:', result);
    this.server.emit('pacienteEncontrado', { message: `Paciente con ID ${id} encontrado.`, data: result });
    return result;
  }

  @SubscribeMessage('updatePaciente')
  async update(@MessageBody() updatePacienteDto: UpdatePacienteDto) {
    const result = await this.pacienteService.update(updatePacienteDto.id, updatePacienteDto);
    console.log('Paciente actualizado:', result);
    this.server.emit('pacienteActualizado', { message: `Paciente con ID ${updatePacienteDto.id} actualizado.`, data: result });
    return result;
  }

  // Eliminar un paciente
  @SubscribeMessage('removePaciente')
  async remove(@MessageBody() id: number) {
    const result = await this.pacienteService.remove(id);
    console.log('Paciente eliminado:', result);
    this.server.emit('pacienteEliminado', { message: `Paciente con ID ${id} eliminado.`, data: result });
    return result;
  }
}
