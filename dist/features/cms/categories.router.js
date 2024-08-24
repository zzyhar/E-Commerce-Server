"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRouter = void 0;
const express_1 = require("express");
const index_1 = require("../products/controller/index");
class CategoriesRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new index_1.CategoriesController();
        this.router.post('/get-categories', this.controller.getCategories);
    }
}
exports.CategoriesRouter = CategoriesRouter;
