import { Model, Schema, Types } from 'mongoose'
import { mongoEcommerceStore } from 'shared/db/dbUse'

// sizing
// colors
// categories

// first create class
export class VOCategories {
  _id?: Types.ObjectId

  parent_key: string = ''
  description: string = ''
  group_key: string = ''
  key: string = ''
  value: string = ''
  order: number = 0

  createdAt?: Date
  updateddAt?: Date
}

const CategoriesSchema = new Schema(
  {
    parent_key: {
      type: String,
      default: null
    },
    group_key: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    key: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    order: {
      type: Number,
      default: null
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const ProductModel: Model<VOCategories> = mongoEcommerceStore.model<VOCategories>('categories', CategoriesSchema)
