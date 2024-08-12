"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.VOUser = void 0;
const mongoose_1 = require("mongoose");
const dbUse_1 = require("shared/db/dbUse");
class VOUser {
    constructor() {
        this.user_role = [];
        this.first_name = '';
        this.last_name = '';
        this.password = '';
        this.profile_url = '';
        this.email = '';
    }
}
exports.VOUser = VOUser;
const UserSchema = new mongoose_1.Schema({
    user_role: {
        type: [String],
        default: []
    },
    first_name: {
        type: String,
        default: null
    },
    last_name: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    profile_url: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.UserModel = dbUse_1.mongoEcommerceStore.model('users', UserSchema);
