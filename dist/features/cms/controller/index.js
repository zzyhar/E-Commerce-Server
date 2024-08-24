"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSController = void 0;
const get_categories_1 = require("./get-categories");
class CMSController {
    constructor() {
        this.getCategories = get_categories_1.getCategories;
    }
}
exports.CMSController = CMSController;
