import { Router } from 'express'
import { TestController } from './controller'

export class TestRouter {
  public router: Router = Router()
  public controller: TestController = new TestController()

  // just connect any needed middeware
  constructor() {
    this.router.get('/create-sample-user', this.controller.testCreateUser)
    this.router.get('/product', this.controller.testShowProduct)
  }
}
