import { Router } from "express";
import { PacienteDatasourceImpl } from "../../infrastructura/datasource/paciente.datasource.impl";
import { PacienteController } from "./controller";
import { PacienteRepositoryImpl } from "../../infrastructura/repositories/paciente.repository.impl";

export class PacienteRoutes {

    static get routes(): Router {
        const router = Router();

        const datasource = new PacienteDatasourceImpl();
        const pacienteRepository = new PacienteRepositoryImpl(datasource);
        const pacienteController = new PacienteController(pacienteRepository);

        router.get("/", pacienteController.getPacientes);
        router.get("/:id", pacienteController.getPacienteById);
        router.post("/", pacienteController.createPaciente);
        router.put("/:id", pacienteController.updatePaciente);
        router.delete("/:id", pacienteController.deletePaciente);

        return router;
    }
}
