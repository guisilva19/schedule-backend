import { User } from '../../entities/user.entity';
import { IUser } from '../../interfaces';
import { AppDataSource } from './../../data-source';



const userListService = async (id: String | Number) => {
    const userRepository = AppDataSource.getRepository(User)

    const users: IUser[] = await userRepository.find()

    const user = users.find(user => user.id === id)
    return user
}

export default userListService