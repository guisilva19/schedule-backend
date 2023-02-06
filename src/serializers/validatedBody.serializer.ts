import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/AppError"

const validatedBodySerializer = (schema: any) => async (request: Request, response: Response, next: NextFunction) => {


    const { body } = request

    if (!Object.keys(body).length) {
        throw new AppError('No body', 400)
    }

        try {
            const validated = await schema.validate(body, {
                abortEarly: false,
                stripUnknown: true,
            })
            request.validated = validated
            next()
        } catch (err: any) {
            return response.status(400).json({ message: "One or more credential is invalid" });
        }
        

    }

    export default validatedBodySerializer