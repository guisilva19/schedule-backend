import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/AppError"
import { IContact } from "../../interfaces"


const contactCreateService = async (validated: IContact, id: any) => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.find({
        where: {
            user_id: { id }
        }
    })

    const contactExists = contacts.find(contact => contact.email === validated.email || contact.telephone === validated.telephone)
    if (contactExists) {
        throw new AppError('Contact alrealdy exists', 400)
    }

    const body = {
        ...validated,
        user_id: id
    }
    const contact = contactRepository.create(body)
    await contactRepository.save(contact)

    return contact
}

export default contactCreateService