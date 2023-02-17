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
const AppError_1 = require("../errors/AppError");
const validatedBodySerializer = (schema) => (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    if (!Object.keys(body).length) {
        throw new AppError_1.AppError('No body', 400);
    }
    try {
        const validated = yield schema.validate(body, {
            abortEarly: false,
            stripUnknown: true,
        });
        request.validated = validated;
        next();
    }
    catch (err) {
        return response.status(400).json({ message: "One or more credential is invalid" });
    }
});
exports.default = validatedBodySerializer;
//# sourceMappingURL=validatedBody.serializer.js.map