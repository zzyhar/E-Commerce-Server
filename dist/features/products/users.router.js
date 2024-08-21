"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const express_1 = require("express");
class UsersRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new UsersController();
        this.router.get('/create-sample-user', this.controller.testCreateUser);
        this.router.get('/product', this.controller.testShowProduct);
    }
}
exports.UsersRouter = UsersRouter;
