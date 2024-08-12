import winston, { format } from 'winston'

const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
}

const logColors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'blue'
}

const os = require('os')
winston.addColors(logColors)

export const logger = winston.createLogger({
  levels: logLevels,
  format: winston.format.combine(winston.format.timestamp(), winston.format.json(), winston.format.splat()),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple())
    })
  ]
})
