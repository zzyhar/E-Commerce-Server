import { Router } from 'express'
import { ProductsController } from './controller'

export class ProductsRouter {
  public router: Router = Router()
  public controller: ProductsController = new ProductsController()

  constructor() {
    this.router.get('/get-products', this.controller.getProducts)
  }
}
