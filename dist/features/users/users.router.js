"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class UsersRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new controller_1.UsersController();
    }
}
exports.UsersRouter = UsersRouter;
