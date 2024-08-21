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
exports.testCreateUser = void 0;
const user_model_1 = require("shared/db/models/user/user.model");
const logger_1 = require("shared/utils/logger");
const testCreateUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        resp.status(200).json({
            data: {
                user: yield user_model_1.UserModel.findOne({
                    _id: '66b949fcfbbf276a088bd6d8'
                })
            }
        });
    }
    catch (error) {
        logger_1.logger.error(error);
        resp.status(500).json({
            data: {}
        });
    }
});
exports.testCreateUser = testCreateUser;
