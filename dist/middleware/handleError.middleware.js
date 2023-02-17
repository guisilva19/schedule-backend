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
exports.handleErrorMiddleware = void 0;
const AppError_1 = require("../errors/AppError");
const handleErrorMiddleware = (error, request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (error instanceof AppError_1.AppError) {
        return response.status(error.statusCode).json({
            message: error.message
        });
    }
    return response.status(500).json({
        message: 'Internal server error'
    });
});
exports.handleErrorMiddleware = handleErrorMiddleware;
//# sourceMappingURL=handleError.middleware.js.map