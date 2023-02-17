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
exports.userSoftDeleteController = exports.userUpdateController = exports.userListController = exports.userSessionController = exports.userCreateController = void 0;
const class_transformer_1 = require("class-transformer");
const userCreate_service_1 = __importDefault(require("../../services/user/userCreate.service"));
const userListSession_service_1 = __importDefault(require("../../services/user/userListSession.service"));
const userSession_service_1 = __importDefault(require("../../services/user/userSession.service"));
const userSoftDelete_service_1 = __importDefault(require("../../services/user/userSoftDelete.service"));
const userUpdate_service_1 = __importDefault(require("../../services/user/userUpdate.service"));
const userCreateController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, userCreate_service_1.default)(request.validated);
    return response.status(201).json((0, class_transformer_1.instanceToPlain)(user));
});
exports.userCreateController = userCreateController;
const userSessionController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = request.body;
    const token = yield (0, userSession_service_1.default)({ email, password });
    return response.status(200).json(token);
});
exports.userSessionController = userSessionController;
const userListController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.user;
    const user = yield (0, userListSession_service_1.default)(id);
    return response.status(200).json((0, class_transformer_1.instanceToPlain)(user));
});
exports.userListController = userListController;
const userUpdateController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.user;
    const userUpdate = request.validated;
    const user = yield (0, userUpdate_service_1.default)(id, userUpdate);
    return response.status(200).json(user);
});
exports.userUpdateController = userUpdateController;
const userSoftDeleteController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.user;
    const result = yield (0, userSoftDelete_service_1.default)(id);
    return response.status(204).send();
});
exports.userSoftDeleteController = userSoftDeleteController;
//# sourceMappingURL=user.controller.js.map