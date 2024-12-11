import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database/conexion/ormconfig';
import router from "./routers/router";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

async function initializeDatabase() {
  try {
    await AppDataSource.initialize();
    console.log('Conexión a la base de datos MySQL establecida correctamente.');
  } catch (error) {
    console.error('Error durante la inicialización de la fuente de datos:', error);
    process.exit(1); 
  }
}

app.get('/', (req, res) => {
  res.send('Servidor en funcionamiento');
});

app.use('/api', router);

async function startServer() {
  await initializeDatabase();
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}

startServer();
