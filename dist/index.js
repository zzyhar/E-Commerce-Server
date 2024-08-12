"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register.js");
const express_1 = __importDefault(require("express"));
const global_router_1 = require("./global.router");
const config_1 = __importDefault(require("config"));
const middleware_router_1 = require("shared/middleware/middleware.router");
const logger_1 = require("shared/utils/logger");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.initializeMiddleware();
        this.initilizeRoutes();
    }
    initializeMiddleware() {
        this.app.use(new middleware_router_1.MiddlewareRouter().router);
    }
    initilizeRoutes() {
        this.app.use('', new global_router_1.RouterGlobal().router);
    }
    start() {
        try {
            const port = config_1.default.get('server.port');
            const host = config_1.default.get('server.host');
            this.app.listen(port, host, () => {
                logger_1.logger.info(`Server Started on  ${host}:${port}`);
            });
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
const server = new Server();
server.start();
