import { Model, Schema, Types } from 'mongoose'
import { mongoEcommerceStore } from 'shared/db/dbUse'

// first create class
export class VOStaff {
  _id?: Types.ObjectId

  staff_role: string[] = []
  first_name: string = ''
  last_name: string = ''
  password: string = ''
  profile_url: string = ''
  email: string = ''
  social_media: string[] = []

  createdAt?: Date
  updateddAt?: Date
}

const StaffSchema = new Schema(
  {
    staff_role: {
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
    },
    social_media: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const UserModel: Model<VOStaff> = mongoEcommerceStore.model<VOStaff>('staff', StaffSchema)
