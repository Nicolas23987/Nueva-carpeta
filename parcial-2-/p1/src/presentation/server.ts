import compression from "compression";
import express, { Router } from "express"
import path from 'path'

interface Options {
    port: number,
    routes: Router,
    public_path?: string
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, routes, public_path = 'public' } = options
        this.port = port,
            this.publicPath = public_path,
            this.routes = routes;
    }

    async start() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(compression())

        this.app.use(this.routes)


        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto ${this.port}`)
        })
    }

}