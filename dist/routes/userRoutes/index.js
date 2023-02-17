"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../../controllers/user/user.controller");
const verifyToken_middleware_1 = __importDefault(require("../../middleware/verifyToken.middleware"));
const schemas_1 = require("../../schemas");
const validatedBody_serializer_1 = __importDefault(require("../../serializers/validatedBody.serializer"));
const routes = (0, express_1.Router)();
const userRouter = () => {
    routes.post('/register', (0, validatedBody_serializer_1.default)(schemas_1.userSchema), user_controller_1.userCreateController);
    routes.post('/session', user_controller_1.userSessionController);
    routes.get('/user', verifyToken_middleware_1.default, user_controller_1.userListController);
    routes.patch('/user', verifyToken_middleware_1.default, (0, validatedBody_serializer_1.default)(schemas_1.userSchemaUpdate), user_controller_1.userUpdateController);
    routes.delete('/user', verifyToken_middleware_1.default, user_controller_1.userSoftDeleteController);
    return routes;
};
exports.userRouter = userRouter;
//# sourceMappingURL=index.js.map