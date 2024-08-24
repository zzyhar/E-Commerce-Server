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
    var _a;
    try {
        let group_key = req.body.group_key;
        let limit = (_a = req.body.limit) !== null && _a !== void 0 ? _a : 10;
        limit = limit > 10 || limit < 0 ? 10 : limit;
        let filter_query = {};
        if (group_key.length) {
            filter_query.group_key = {
                $in: [group_key]
            };
        }
        const projection = { name: 1, key: 1, icon: 1 };
        if (!Object.keys(filter_query).length) {
            throw 'No parameters provided';
        }
        let categories = yield categories_model_1.CategoryModel.find(filter_query, projection, {
            limit
        });
        resp.status(200).json(categories);
    }
    catch (error) {
        resp.status(500).json();
    }
});
exports.getCategories = getCategories;
