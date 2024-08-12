"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("shared/utils/logger");
class mongoDb {
    constructor(uri, name) {
        this.connection = mongoose_1.default.createConnection(uri);
        this.connection.on('open', () => {
            logger_1.logger.info(`[MongoDB] Connection opened to => ${name}`);
        });
        this.connection.on('close', () => {
            logger_1.logger.info(`[MongoDB] Connection closed to => ${name}`);
        });
        this.connection.on('error', (error) => {
            logger_1.logger.error(`[MongoDB] Connection error to => ${name}`, error);
        });
    }
    static getInstance(uri, name) {
        if (!mongoDb.instance) {
            mongoDb.instance = new mongoDb(uri, name);
        }
        return mongoDb.instance;
    }
    useDB(databaseName) {
        return this.connection.useDb(databaseName);
    }
}
exports.mongoDb = mongoDb;
