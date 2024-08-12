import config from 'config'
import RedisStore from 'connect-redis'
import session from 'express-session'
import { createClient } from 'redis'
import { logger } from 'shared/utils/logger'

export const cookieParserWithSessionDefaultSetup = () => {
  const oneWeek = 1000 * 60 * 60 * 7

  const secretSessionKey = config.get<string>('server.sessions.hashingKey')
  const domain = config.get<string>('server.host')
  const redisURI = config.get<string>('server.redis.uri')

  // Initialize client
  const redisClient = createClient({
    url: redisURI
  })

  redisClient
    .connect()
    .then(() => {
      logger.info('Redis connected')
    })
    .catch((error: Error) => {
      logger.error(`Redis connection error: ${error}`)
    })

  let cookieSettings: session.CookieOptions = {
    maxAge: oneWeek,
    secure: false,
    httpOnly: true,
    sameSite: 'strict',
    domain
  }

  if (config.get<string>('env') === 'production') {
    cookieSettings.secure = true
  }

  return session({
    name: 'session',
    // @ts-expect-error
    store: new RedisStore({
      // @ts-expect-error
      client: redisClient
    }),
    secret: secretSessionKey,
    saveUninitialized: false,
    cookie: cookieSettings,
    resave: false
  })
}
