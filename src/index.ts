import 'module-alias/register.js'
import express, { Express } from 'express'
import { RouterGlobal } from './global.router'
import config from 'config'
import { MiddlewareRouter } from 'shared/middleware/middleware.router'
import { logger } from 'shared/utils/logger'

class Server {
  private app: Express

  constructor() {
    // initilize express server
    this.app = express()

    this.initializeMiddleware()
    this.initilizeRoutes()
  }

  private initializeMiddleware(): void {
    this.app.use(new MiddlewareRouter().router)
  }

  private initilizeRoutes(): void {
    this.app.use('', new RouterGlobal().router)
  }

  public start(): void {
    try {
      const port = config.get<number>('server.port')
      const host = config.get<string>('server.host')

      this.app.listen(port, host, () => {
        logger.info(`Server Started on  ${host}:${port}`)
      })
    } catch (error) {
      logger.error(error)
    }
  }
}

const server: Server = new Server()

server.start()
