"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ProductsRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new controller_1.ProductsController();
        this.router.post('/get-products', this.controller.getProducts);
    }
}
exports.ProductsRouter = ProductsRouter;
