import { AppDataSource } from '../../data-source';
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces";
import { AppError } from '../../errors/AppError';

const userService = async (body: IUser) => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()
    const userExists = users.find(user => user.email === body.email)

    if(userExists) {
        throw new AppError('User alrealdy ')
    }

    const user = userRepository.create(body)
    await userRepository.save(user)
    
    return user

}


export default userService