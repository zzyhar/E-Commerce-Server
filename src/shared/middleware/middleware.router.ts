import express, { Router } from 'express'
import { cookieParserWithSessionDefaultSetup } from './controller/cookie-parser-with-session'

export class MiddlewareRouter {
  public router: Router = Router()

  // just connect any needed middeware
  constructor() {
    // Set up sessions storage
    this.router.use(cookieParserWithSessionDefaultSetup())

    // parsing incoming data to json
    this.router.use(express.json({ limit: '5mb' }))
    this.router.use(express.urlencoded({ limit: '5mb', extended: true, parameterLimit: 10000 }))
  }
}
