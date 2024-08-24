import { Request, Response } from 'express'
import { FilterQuery } from 'mongoose'
import { VOCategories, CategoryModel } from 'shared/db/models/categories.model'

export const getCategories = async (req: Request, resp: Response) => {
  try {
    let group_key: string = req.body.group_key
    let limit: number = req.body.limit ?? 10
    limit = limit > 10 || limit < 0 ? 10 : limit

    let filter_query: FilterQuery<VOCategories> = {}

    if (group_key.length) {
      filter_query.group_key = {
        $in: [group_key]
      }
    }

    // Specify fields to retrieve
    const projection = { name: 1, key: 1, icon: 1 }

    if (!Object.keys(filter_query).length) {
      throw 'No parameters provided'
    }

    let categories: VOCategories[] = await CategoryModel.find(filter_query, projection, {
      limit
    })

    resp.status(200).json(categories)
  } catch (error) {
    resp.status(500).json()
  }
}
