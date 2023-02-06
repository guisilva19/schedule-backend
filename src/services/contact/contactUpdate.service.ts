import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/AppError"
import { IContact } from "../../interfaces"

const contactUpdatedService = async (id: any, body: IContact) => {

    const contactRepository = AppDataSource.getRepository(Contact)
    const allContacts = await contactRepository.find()
    const contactExist = allContacts.find(contact => contact.id == id)

    if(!contactExist) {
        throw new AppError('Contact not exist', 400)
    }

    await contactRepository.update(id, {
        name: body.name ? body.name : contactExist.name,
        telephone: body.telephone ? body.telephone : contactExist.telephone,
        email: body.email ? body.email : contactExist.email
    })


    const contact = await contactRepository.findOneBy({id})
    return contact
}

export default contactUpdatedService