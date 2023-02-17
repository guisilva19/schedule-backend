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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const data_source_1 = require("../../data-source");
const user_entity_1 = require("../../entities/user.entity");
const AppError_1 = require("../../errors/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const userSessionService = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const users = yield userRepository.find();
    const user = users.find(user => user.email === email);
    if (!user) {
        throw new AppError_1.AppError('Invalid email or password', 403);
    }
    if (!user.is_active) {
        throw new AppError_1.AppError('User not exists', 403);
    }
    const passwordValid = (0, bcrypt_1.compareSync)(password, user.password);
    if (!passwordValid) {
        throw new AppError_1.AppError('Invalid email or password', 403);
    }
    const token = jsonwebtoken_1.default.sign({ user: user }, process.env.SECRET_KEY, { expiresIn: '24h' });
    return token;
});
exports.default = userSessionService;
//# sourceMappingURL=userSession.service.js.map