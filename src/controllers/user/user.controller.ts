import { instanceToPlain } from 'class-transformer'
import { Request, Response } from "express"
import userService from "../../services/user/userCreate.service"
import userListService from '../../services/user/userListSession.service';
import userSessionService from '../../services/user/userSession.service';
import userSoftDeleteService from '../../services/user/userSoftDelete.service';
import userUpdateService from '../../services/user/userUpdate.service';



const userCreateController = async (request: Request, response: Response) => {
    const user = await userService(request.validated)
    return response.status(201).json(instanceToPlain(user))
}

const userSessionController = async (request: Request, response: Response) => {
    const { email, password } = request.body
    const token = await userSessionService({ email, password })

    return response.status(200).json(token)
}

const userListController = async (request: Request, response: Response) => {
    const { id } = request.user
    const user = await userListService(id)

    return response.status(200).json(instanceToPlain(user))
}

const userUpdateController = async (request: Request, response: Response) => {

    const { id } = request.user
    const userUpdate = request.validated

    const user = await userUpdateService(id, userUpdate)
    return response.status(200).json(user)
}

const userSoftDeleteController = async (request: Request, response: Response) => {

    const { id } = request.user
    const result = await userSoftDeleteService(id)
    return response.status(204).send()
}

export { userCreateController, userSessionController, userListController, userUpdateController, userSoftDeleteController}