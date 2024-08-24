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
exports.getCategories = void 0;
const categories_model_1 = require("shared/db/models/categories.model");
const getCategories = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        let names = (_a = req.body.names) !== null && _a !== void 0 ? _a : [];
        let icons = (_b = req.body.icons) !== null && _b !== void 0 ? _b : [];
        let keys = (_c = req.body.keys) !== null && _c !== void 0 ? _c : [];
        let filter_query = {};
        if (keys.length) {
            filter_query.key = {
                $in: keys
            };
        }
        console.log(req.body);
        const projection = { _id: 0, name: 1, icon: 1, key: 1 };
        if (!Object.keys(filter_query).length) {
            throw 'No parameters provided';
        }
        let categories = yield categories_model_1.CategoryModel.find(filter_query, projection);
        console.log(categories);
        if (categories.length > 0) {
            resp.status(200).json(categories);
        }
        else {
            resp.status(204).json({ message: 'No categories found' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error);
            resp.status(500).json({ message: 'Error retrieving categories' });
        }
        else {
            console.error('Unexpected error:', error);
            resp.status(500).json({ message: 'Internal server error' });
        }
    }
});
exports.getCategories = getCategories;
