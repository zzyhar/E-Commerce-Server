import mongoose, { Connection } from 'mongoose'
import { logger } from 'shared/utils/logger'

export type dbNames = 'ecommerce-store'

export class mongoDb {
  private static instance: mongoDb
  private connection: Connection

  // create connection instance
  constructor(uri: string, name: string) {
    this.connection = mongoose.createConnection(uri)

    this.connection.on('open', () => {
      logger.info(`[MongoDB] Connection opened to => ${name}`)
    })

    this.connection.on('close', () => {
      logger.info(`[MongoDB] Connection closed to => ${name}`)
    })

    this.connection.on('error', (error) => {
      logger.error(`[MongoDB] Connection error to => ${name}`, error)
    })
  }

  public static getInstance(uri: string, name: string): mongoDb {
    if (!mongoDb.instance) {
      mongoDb.instance = new mongoDb(uri, name)
    }
    return mongoDb.instance
  }

  public useDB(databaseName: dbNames): Connection {
    return this.connection.useDb(databaseName)
  }
}
