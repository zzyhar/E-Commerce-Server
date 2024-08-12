"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const test_create_user_1 = require("./test-create-user");
class TestController {
    constructor() {
        this.testCreateUser = test_create_user_1.testCreateUser;
    }
}
exports.TestController = TestController;
