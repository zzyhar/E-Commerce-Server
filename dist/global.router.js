"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterGlobal = void 0;
const express_1 = require("express");
const test_router_1 = require("test/test.router");
class RouterGlobal {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.use('/test', new test_router_1.TestRouter().router);
    }
}
exports.RouterGlobal = RouterGlobal;
