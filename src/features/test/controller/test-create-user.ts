import { Request, Response } from 'express'
import { UserModel, VOUser } from 'shared/db/models/user/user.model'
import { logger } from 'shared/utils/logger'

export const testCreateUser = async (req: Request, resp: Response) => {
  try {
    // asdfa

    resp.status(200).json({
      data: {
        user: await UserModel.findOne({
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
