import { Model, Schema, Types } from 'mongoose'
import { mongoEcommerceStore } from 'shared/db/dbUse'

// sizing
// colors
// categories

// parentKey: string = '' if you have parent -> for hirarachy
// groupKey: "prodcut_cat"
// name: "Name of the category"
// key: category key => "man_fashiong" // goes into storatage of product category
// order: 1

// first create class
export class VOCategories {
  _id?: Types.ObjectId

  parent_key: string = ''
  group_key: string = ''
  name: string = ''
  description: string = ''
  key: string = ''
  value: string = ''
  icon: string = ''
  order: number | null

  createdAt?: Date
  updatedAt?: Date
}

const CategoriesSchema = new Schema(
  {
    // unique key in the parent table of a referencial constarint
    parentKey: {
      type: String,
      default: null
    },
    groupKey: {
      type: String,
      default: null
    },
    name: {
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
    icon: {
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

export const CategoryModel: Model<VOCategories> = mongoEcommerceStore.model<VOCategories>(
  'categories',
  CategoriesSchema
)
