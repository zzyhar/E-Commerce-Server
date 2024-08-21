import { Router } from 'express'
import { ProductsRouter } from 'products/products.router'
import { UsersRouter } from 'users/users.router'

export class RouterGlobal {
  public router: Router = Router()

  // just connect any needed middeware
  constructor() {
    // test route
    this.router.use('/users', new UsersRouter().router)
    this.router.use('/products', new ProductsRouter().router)
  }
}
