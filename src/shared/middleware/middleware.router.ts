import express, { Router } from 'express'
import cors from 'cors'

export class MiddlewareRouter {
  public router: Router = Router()

  // just connect any needed middeware
  constructor() {
    // Set up sessions storage
    // this.router.use(cookieParserWithSessionDefaultSetup())

    // parsing incoming data to json

    this.router.use(
      cors({
        origin: 'http://localhost:5173',
        optionsSuccessStatus: 200
      })
    )
    this.router.use(express.json({ limit: '5mb' }))
    this.router.use(express.urlencoded({ limit: '5mb', extended: true, parameterLimit: 10000 }))
  }
}
