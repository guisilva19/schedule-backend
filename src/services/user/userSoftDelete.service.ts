import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"

const userSoftDeleteService = async (id: any) => {
    const userRepository = AppDataSource.getRepository(User)

    await userRepository.update(id, {
        is_active: false
    })

    return 'Delete'
}

export default userSoftDeleteService