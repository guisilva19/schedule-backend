"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = require("express");
const contact_controller_1 = require("../../controllers/contact/contact.controller");
const verifyToken_middleware_1 = __importDefault(require("../../middleware/verifyToken.middleware"));
const schemas_1 = require("../../schemas");
const validatedBody_serializer_1 = __importDefault(require("../../serializers/validatedBody.serializer"));
const routes = (0, express_1.Router)();
const contactRouter = () => {
    routes.post('/contact', verifyToken_middleware_1.default, (0, validatedBody_serializer_1.default)(schemas_1.contactSchema), contact_controller_1.contactCreateController);
    routes.get('/contact', verifyToken_middleware_1.default, contact_controller_1.contactListController);
    routes.delete('/contact/:id', verifyToken_middleware_1.default, contact_controller_1.contactDeleteController);
    routes.patch('/contact/:id', verifyToken_middleware_1.default, (0, validatedBody_serializer_1.default)(schemas_1.contactSchemaUpdate), contact_controller_1.contactUpdatedController);
    return routes;
};
exports.contactRouter = contactRouter;
//# sourceMappingURL=index.js.map