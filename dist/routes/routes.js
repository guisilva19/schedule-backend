"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const contactRoutes_1 = require("./contactRoutes");
const userRoutes_1 = require("./userRoutes");
const AppRoutes = (app) => {
    app.use((0, userRoutes_1.userRouter)());
    app.use((0, contactRoutes_1.contactRouter)());
};
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map