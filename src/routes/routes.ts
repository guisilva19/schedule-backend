import { Express } from "express";
import { contactRouter } from "./contactRoutes";
import { userRouter } from "./userRoutes";


export const AppRoutes = (app: Express) => {
    app.use(userRouter())
    app.use(contactRouter())
}

