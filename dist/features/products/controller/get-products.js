"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const product_model_1 = require("shared/db/models/product.model");
const getProducts = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        let slugs = (_a = req.body.slugs) !== null && _a !== void 0 ? _a : [];
        let tags = (_b = req.body.tags) !== null && _b !== void 0 ? _b : [];
        let limit = (_c = req.body.limit) !== null && _c !== void 0 ? _c : 10;
        let filter_query = {};
        if (slugs.length) {
            filter_query.slug = {
                $in: slugs
            };
        }
        if (tags.length) {
            filter_query.tags = {
                $in: tags
            };
        }
        if (!Object.keys(filter_query).length) {
            throw 'No parameters provided';
        }
        let products = yield product_model_1.ProductModel.find(filter_query, {
            slug: 1,
            title: 1,
            images: 1,
            variations: 1,
            createdAt: 1
        }, {
            limit
        });
        console.log(products);
        resp.status(200).json({
            products
        });
    }
    catch (error) {
        resp.status(500).json({
            data: {}
        });
    }
});
exports.getProducts = getProducts;
