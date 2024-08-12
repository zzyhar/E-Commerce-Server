"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieParserWithSessionDefaultSetup = void 0;
const config_1 = __importDefault(require("config"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const redis_1 = require("redis");
const logger_1 = require("shared/utils/logger");
const cookieParserWithSessionDefaultSetup = () => {
    const oneWeek = 1000 * 60 * 60 * 7;
    const secretSessionKey = config_1.default.get('server.sessions.hashingKey');
    const domain = config_1.default.get('server.host');
    const redisURI = config_1.default.get('server.redis.uri');
    const redisClient = (0, redis_1.createClient)({
        url: redisURI
    });
    redisClient
        .connect()
        .then(() => {
        logger_1.logger.info('Redis connected');
    })
        .catch((error) => {
        logger_1.logger.error(`Redis connection error: ${error}`);
    });
    let cookieSettings = {
        maxAge: oneWeek,
        secure: false,
        httpOnly: true,
        sameSite: 'strict',
        domain
    };
    if (config_1.default.get('env') === 'production') {
        cookieSettings.secure = true;
    }
    return (0, express_session_1.default)({
        name: 'session',
        store: new connect_redis_1.default({
            client: redisClient
        }),
        secret: secretSessionKey,
        saveUninitialized: false,
        cookie: cookieSettings,
        resave: false
    });
};
exports.cookieParserWithSessionDefaultSetup = cookieParserWithSessionDefaultSetup;
