import { Router } from "express";
import { SignoVitalDatasourceImpl } from "../../infrastructura/datasource/signo.vital.datasource.impl";
import { SignoVitalController } from "./controller"; 
import { SignoVitalRepositoryImpl } from "../../infrastructura/repositories/signo.vital.repository.impl";

export class SignoVitalRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new SignoVitalDatasourceImpl();
        const signoVitalRepository = new SignoVitalRepositoryImpl(datasource);
        const signoVitalController = new SignoVitalController(signoVitalRepository);

        router.get("/", signoVitalController.getSignosVitales);
        router.get("/:id", signoVitalController.getSignoVitalById);
        router.post("/", signoVitalController.createSignoVital);
        router.put("/:id", signoVitalController.updateSignoVital);
        router.delete("/:id", signoVitalController.deleteSignoVital);

        return router;
    }
}
