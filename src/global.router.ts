import { Router } from 'express'
import { TestRouter } from 'test/test.router'

export class RouterGlobal {
  public router: Router = Router()

  // just connect any needed middeware
  constructor() {
    // test route
    this.router.use('/test', new TestRouter().router)
  }
}
