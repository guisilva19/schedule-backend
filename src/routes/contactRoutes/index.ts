import { Router } from "express";
import { contactCreateController, contactDeleteController, contactListController, contactUpdatedController } from "../../controllers/contact/contact.controller";
import verifyTokenMiddleware from "../../middleware/verifyToken.middleware";
import { contactSchema, contactSchemaUpdate } from "../../schemas";
import validatedBodySerializer from "../../serializers/validatedBody.serializer";

const routes = Router()

export const contactRouter = () => {
    routes.post('/contact', verifyTokenMiddleware, validatedBodySerializer(contactSchema), contactCreateController)

    routes.get('/contact', verifyTokenMiddleware, contactListController)

    routes.delete('/contact/:id', verifyTokenMiddleware, contactDeleteController)

    routes.patch('/contact/:id', verifyTokenMiddleware, validatedBodySerializer(contactSchemaUpdate), contactUpdatedController)

    return routes
}