import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"




const contactListService = async (id: any) => {

    const contactRepository = AppDataSource.getRepository(Contact)
    const contacts = await contactRepository.find({
        where: {
            user_id: {id}
        }
    })
    return contacts

}

export default contactListService