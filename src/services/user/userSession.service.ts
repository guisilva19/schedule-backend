import { compareSync } from "bcrypt"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import jwt from 'jsonwebtoken'
import 'dotenv/config'


const userSessionService = async ({ email, password }: any) => {

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const user: any = users.find(user => user.email === email)

    if (!user) {
        throw new AppError('Invalid email or password', 403)
    }

    if(!user.is_active) {
        throw new AppError('User not exists', 403)
    }

    const passwordValid = compareSync(password, user.password)

    if (!passwordValid) {
        throw new AppError('Invalid email or password', 403)
    }
    

    const token = jwt.sign({user: user}, process.env.SECRET_KEY as string, {expiresIn: '24h'})
    return token
}

export default userSessionService