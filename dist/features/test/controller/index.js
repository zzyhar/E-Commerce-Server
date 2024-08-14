"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const test_create_user_1 = require("./test-create-user");
const test_show_product_1 = require("./test-show-product");
class TestController {
    constructor() {
        this.testCreateUser = test_create_user_1.testCreateUser;
        this.testShowProduct = test_show_product_1.testShowProduct;
    }
}
exports.TestController = TestController;
