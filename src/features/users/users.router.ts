import { Router } from 'express'
import { UsersController } from './controller'

export class UsersRouter {
  public router: Router = Router()
  public controller: UsersController = new UsersController()

  // just connect any needed middeware
  constructor() {}
}
