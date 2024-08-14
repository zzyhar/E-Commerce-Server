import { Request, Response } from 'express'
import { ProductModel, VOProduct } from 'shared/db/models/product/product.model'
import { logger } from 'shared/utils/logger'

export const testShowProduct = async (req: Request, resp: Response) => {
  try {
    resp.status(200).json({
      data: {
        user: await ProductModel.findOne({
          _id: '66b949fcfbbf276a088bd6d8'
        })
      }
    })
  } catch (error) {
    logger.error(error)
    resp.status(500).json({
      data: {}
    })
  }
}
