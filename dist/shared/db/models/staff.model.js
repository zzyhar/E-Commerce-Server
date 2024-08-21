"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.VOUser = void 0;
const mongoose_1 = require("mongoose");
const dbUse_1 = require("shared/db/dbUse");
class VOUser {
    constructor() {
        this.roles = [];
        this.first_name = '';
        this.last_name = '';
        this.password = '';
        this.profile_url = '';
        this.email = '';
        this.social_media = [];
    }
}
exports.VOUser = VOUser;
const StaffSchema = new mongoose_1.Schema({
    roles: {
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
    },
    social_media: {
        type: [String],
        default: []
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.UserModel = dbUse_1.mongoEcommerceStore.model('staff', StaffSchema);
