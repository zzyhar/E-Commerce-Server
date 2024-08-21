"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.VOCategories = void 0;
const mongoose_1 = require("mongoose");
const dbUse_1 = require("shared/db/dbUse");
class VOCategories {
    constructor() {
        this.parent_key = '';
        this.description = '';
        this.group_key = '';
        this.key = '';
        this.value = '';
        this.order = 0;
    }
}
exports.VOCategories = VOCategories;
const CategoriesSchema = new mongoose_1.Schema({
    parent_key: {
        type: String,
        default: null
    },
    group_key: {
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
exports.ProductModel = dbUse_1.mongoEcommerceStore.model('categories', CategoriesSchema);
