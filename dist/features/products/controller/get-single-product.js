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
exports.getSingleProduct = void 0;
const product_model_1 = require("shared/db/models/product.model");
const getSingleProduct = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        let product_slug = (_a = req.body.slug) !== null && _a !== void 0 ? _a : '';
        let tags = (_b = req.body.tags) !== null && _b !== void 0 ? _b : [];
        if (!product_slug) {
            throw 'Please provide slug';
        }
        let filter_query = {};
        if (product_slug) {
            filter_query.slug = product_slug;
        }
        if (tags.length) {
            filter_query.tags = {
                $in: tags
            };
        }
        if (filter_query) {
            throw 'No parameters provided';
        }
        let product = yield product_model_1.ProductModel.findOne(filter_query);
        if (product === null) {
            throw 'No product';
        }
        resp.status(200).json({
            product
        });
    }
    catch (error) {
        resp.status(500).json({
            data: {}
        });
    }
});
exports.getSingleProduct = getSingleProduct;
