"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterGlobal = void 0;
const express_1 = require("express");
const cms_router_1 = require("cms/cms.router");
const products_router_1 = require("products/products.router");
const users_router_1 = require("users/users.router");
class RouterGlobal {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.use('/users', new users_router_1.UsersRouter().router);
        this.router.use('/products', new products_router_1.ProductsRouter().router);
        this.router.use('/cms', new cms_router_1.CMSRouter().router);
    }
}
exports.RouterGlobal = RouterGlobal;
