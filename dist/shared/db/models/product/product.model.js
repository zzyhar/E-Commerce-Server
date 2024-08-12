"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.VOProduct = void 0;
const mongoose_1 = require("mongoose");
const dbUse_1 = require("shared/db/dbUse");
class VOProduct {
    constructor() {
        this.title = '';
        this.description = '';
        this.slug = '';
        this.variations = [];
    }
}
exports.VOProduct = VOProduct;
const ProductSchema = new mongoose_1.Schema({
    title: {
        type: String,
        default: null
    },
    slug: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    variations: {
        type: [
            {
                size: {
                    type: [String],
                    default: []
                },
                color: {
                    type: [String],
                    default: []
                },
                rating: {
                    type: Number,
                    default: null
                },
                price: {
                    type: Number,
                    default: null
                },
                salePrice: {
                    type: Number,
                    default: null
                }
            }
        ],
        default: []
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.UserModel = dbUse_1.mongoEcommerceStore.model('products', ProductSchema);
