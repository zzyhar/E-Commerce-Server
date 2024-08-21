"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const get_products_1 = require("./get-products");
class ProductsController {
    constructor() {
        this.getProducts = get_products_1.getProducts;
    }
}
exports.ProductsController = ProductsController;
