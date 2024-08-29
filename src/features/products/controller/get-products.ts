import { Request, Response } from 'express'
import { FilterQuery } from 'mongoose'
import { ProductModel, VOProduct } from 'shared/db/models/product.model'

export const getProducts = async (req: Request, resp: Response) => {
  try {
    let slugs: string = req.body.slugs ?? []
    let tags: string = req.body.tags ?? []
    let limit: number = req.body.limit ?? 10

    let filter_query: FilterQuery<VOProduct> = {}

    if (slugs.length) {
      filter_query.slug = {
        $in: slugs
      }
    }

    if (tags.length) {
      filter_query.tags = {
        $in: tags
      }
    }

    if (!Object.keys(filter_query).length) {
      throw 'No parameters provided'
    }

    let products: VOProduct[] = await ProductModel.find(
      filter_query,
      {
        slug: 1,
        title: 1,
        images: 1,
        variations: 1,
        createdAt: 1
      },
      {
        limit
      }
    )
    console.log(products)
    resp.status(200).json({
      products
    })
  } catch (error) {
    resp.status(500).json({
      data: {}
    })
  }
}
