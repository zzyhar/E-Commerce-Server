import { Router } from 'express'
import { CMSController } from './controller'

export class CMSRouter {
  public router: Router = Router()
  public controller: CMSController = new CMSController()

  constructor() {
    this.router.post('/get-categories', this.controller.getCategories)
  }
}
