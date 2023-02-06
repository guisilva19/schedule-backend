import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/AppError"

const contactDeleteService = async (id: any, user_id: any) => {

    const contactRepository = AppDataSource.getRepository(Contact)
    const allContacts = await contactRepository.find()
    const contactExist = allContacts.find(contact => contact.id === id)

    if(!contactExist) {
        throw new AppError('Contact not exist', 400)
    }

    await contactRepository.delete(id)

    return 'OK'
}

export default contactDeleteService