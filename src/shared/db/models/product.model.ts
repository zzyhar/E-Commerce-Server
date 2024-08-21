import { Model, Schema, Types } from 'mongoose'
import { mongoEcommerceStore } from 'shared/db/dbUse'

// first create class
export class VOProduct {
  _id?: Types.ObjectId

  title: string = ''
  description: string = ''
  slug: string = ''
  categories: string[] = []

  images: string[] = []
  category: string[] = []
  tags: string[] = []

  variations: {
    _id: Types.ObjectId
    size: string
    color: string
    rating: number
    price: number
    salePrice: number
    images: string[]
  }[] = []

  createdAt?: Date
  updateddAt?: Date
}

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      default: null
    },
    slug: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    images: {
      type: [String],
      default: []
    },
    categories: {
      type: [String],
      default: null
    },
    tags: {
      type: [String],
      default: null
    },
    variations: {
      type: [
        {
          _id: false,
          size: {
            type: String,
            default: []
          },
          color: {
            type: String,
            default: []
          },
          rating: {
            type: Number,
            default: null
          },
          price: {
            type: Number,
            default: null
          },
          salePrice: {
            type: Number,
            default: null
          },
          images: {
            type: [String],
            default: []
          }
        }
      ],
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const ProductModel: Model<VOProduct> = mongoEcommerceStore.model<VOProduct>('products', ProductSchema)
