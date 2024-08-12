"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class TestRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new controller_1.TestController();
        this.router.get('/create-sample-user', this.controller.testCreateUser);
    }
}
exports.TestRouter = TestRouter;
