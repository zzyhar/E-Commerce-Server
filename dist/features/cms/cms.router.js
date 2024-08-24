"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CMSRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new controller_1.CMSController();
        this.router.post('/get-categories', this.controller.getCategories);
    }
}
exports.CMSRouter = CMSRouter;
