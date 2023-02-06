import { Request, Response } from "express"
import contactCreateService from "../../services/contact/contactCreate.service"
import contactDeleteService from "../../services/contact/contactDelete.service"
import contactListService from "../../services/contact/contactList.service"
import contactUpdatedService from "../../services/contact/contactUpdate.service"

const contactCreateController = async (request: Request, response: Response) => {

    const { validated } = request
    const { id } = request.user
    const result = await contactCreateService(validated, id)
    return response.status(201).json(result)
}

const contactListController = async (request: Request, response: Response) => {

    const { id } = request.user
    const contacts = await contactListService(id)
    return response.status(200).json(contacts)
}

const contactDeleteController = async (request: Request, response: Response) => {

    const { id } = request.params
    const user_id = request.user.id
    const result = await contactDeleteService(id, user_id)
    return response.status(200).send()
}

const contactUpdatedController = async (request: Request, response: Response) => {

    const id = request.params.id
    const { body } = request

    const contact = await contactUpdatedService(id, body)
    return response.status(200).json(contact)

}



export { contactCreateController, contactListController, contactDeleteController, contactUpdatedController }