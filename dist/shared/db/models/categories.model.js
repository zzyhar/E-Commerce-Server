"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.VOCategories = void 0;
const mongoose_1 = require("mongoose");
const dbUse_1 = require("shared/db/dbUse");
class VOCategories {
    constructor() {
        this.parent_key = '';
        this.group_key = '';
        this.name = '';
        this.description = '';
        this.key = '';
        this.value = '';
        this.icon = '';
    }
}
exports.VOCategories = VOCategories;
const CategoriesSchema = new mongoose_1.Schema({
    parentKey: {
        type: String,
        default: null
    },
    groupKey: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    key: {
        type: String,
        default: null
    },
    value: {
        type: String,
        default: null
    },
    order: {
        type: Number,
        default: null
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.CategoryModel = dbUse_1.mongoEcommerceStore.model('categories', CategoriesSchema);
