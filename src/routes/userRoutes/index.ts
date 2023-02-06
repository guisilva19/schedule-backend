import {  Router } from "express";
import { userCreateController, userListController, userSessionController, userSoftDeleteController, userUpdateController } from "../../controllers/user/user.controller";
import verifyTokenMiddleware from "../../middleware/verifyToken.middleware";
import { userSchema, userSchemaUpdate} from "../../schemas";
import validatedBodySerializer from "../../serializers/validatedBody.serializer";


const routes = Router()


export const userRouter = () => {
    routes.post('/register', validatedBodySerializer(userSchema), userCreateController)
    routes.post('/session', userSessionController)


    routes.get('/user', verifyTokenMiddleware, userListController)

    routes.patch('/user', verifyTokenMiddleware, validatedBodySerializer(userSchemaUpdate), userUpdateController)
    routes.delete('/user', verifyTokenMiddleware, userSoftDeleteController)
    return routes
}