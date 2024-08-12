import { Model, Schema, Types } from 'mongoose'
import { mongoEcommerceStore } from 'shared/db/dbUse'

// first create class
export class VOProduct {
  _id?: Types.ObjectId

  title: string = ''
  description: string = ''
  slug: string = ''

  variations: {
    _id: Types.ObjectId
    size: string
    color: string
    rating: number
    price: number
    salePrice: number
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

    variations: {
      type: [
        {
          size: {
            type: [String],
            default: []
          },
          color: {
            type: [String],
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

export const UserModel: Model<VOProduct> = mongoEcommerceStore.model<VOProduct>('products', ProductSchema)
