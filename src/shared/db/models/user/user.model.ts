import { Model, Schema, Types } from 'mongoose'
import { mongoEcommerceStore } from 'shared/db/dbUse'

// first create class
export class VOUser {
  _id?: Types.ObjectId

  user_role: string[] = []
  first_name: string = ''
  last_name: string = ''
  password: string = ''
  profile_url: string = ''
  email: string = ''

  createdAt?: Date
  updateddAt?: Date
}

const UserSchema = new Schema(
  {
    user_role: {
      type: [String],
      default: []
    },
    first_name: {
      type: String,
      default: null
    },
    last_name: {
      type: String,
      default: null
    },
    password: {
      type: String,
      default: null
    },
    profile_url: {
      type: String,
      default: null
    },
    email: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const UserModel: Model<VOUser> = mongoEcommerceStore.model<VOUser>('users', UserSchema)
