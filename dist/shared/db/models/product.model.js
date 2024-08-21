"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.VOProduct = void 0;
const mongoose_1 = require("mongoose");
const dbUse_1 = require("shared/db/dbUse");
class VOProduct {
    constructor() {
        this.title = '';
        this.description = '';
        this.slug = '';
        this.categories = [];
        this.images = [];
        this.category = [];
        this.tags = [];
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
    images: {
        type: [String],
        default: []
    },
    categories: {
        type: [String],
        default: null
    },
    tags: {
        type: [String],
        default: null
    },
    variations: {
        type: [
            {
                _id: false,
                size: {
                    type: String,
                    default: []
                },
                color: {
                    type: String,
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
                },
                images: {
                    type: [String],
                    default: []
                }
            }
        ],
        default: []
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.ProductModel = dbUse_1.mongoEcommerceStore.model('products', ProductSchema);
