import { Connection } from 'mongoose'
import { mongoDb } from './db'
import config from 'config'

const ecommerceStore: mongoDb = new mongoDb(config.get<string>('databases.mongo.uri'), 'Ecommerce Store')

export const mongoEcommerceStore: Connection = ecommerceStore.useDB('ecommerce-store')
