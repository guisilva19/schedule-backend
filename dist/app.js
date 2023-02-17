"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const handleError_middleware_1 = require("./middleware/handleError.middleware");
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
(0, routes_1.AppRoutes)(app);
app.use(handleError_middleware_1.handleErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map