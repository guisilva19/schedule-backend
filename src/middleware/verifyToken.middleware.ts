import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'



const verifyTokenMiddleware = (request: Request, response: Response, next: NextFunction) => {

    let token = request.headers.authorization

    if (!token) {
        return response.status(401).json({
            message: 'Authorization is missing'
        })
    }
    
    token = token.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
        if (error) {
            return response.status(401).json(
                {
                    message: 'Invalid token'
                })
        }

        request.user = decoded.user

        next()
    })
}

export default verifyTokenMiddleware