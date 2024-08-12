"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoEcommerceStore = void 0;
const db_1 = require("./db");
const config_1 = __importDefault(require("config"));
const ecommerceStore = new db_1.mongoDb(config_1.default.get('databases.mongo.uri'), 'Ecommerce Store');
exports.mongoEcommerceStore = ecommerceStore.useDB('ecommerce-store');
