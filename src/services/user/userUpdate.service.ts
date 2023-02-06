import { IUser } from './../../interfaces/index';
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { hash } from 'bcrypt';

const userUpdateService = async (id: any, userUpdate: IUser) => {
    const userRepository = AppDataSource.getRepository(User)
    const users : IUser[] = await userRepository.find()
    const user : any = users.find(user  => user.id == id)
    const { name, email, telephone, password } : any = userUpdate

    await userRepository.update(id, {
        name: name ? name : user.name,
        telephone: telephone ? telephone : user.telephone,
        email: email ? email : user.email,
        password: password ? await hash(password, 10) : user.password,
      });

      const result = await userRepository.findOneBy({id})
      return result

}


export default userUpdateService