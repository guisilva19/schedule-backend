import * as yup from 'yup'
import { hashSync } from 'bcrypt'

const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().transform((primaryValue: string, SecondValue: string) => {
        return hashSync(SecondValue, 10)
    }),
    telephone: yup.string().required()

})

const userSchemaUpdate = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    telephone: yup.string()
})


const contactSchema = yup.object().shape({
    name: yup.string().required(),
    telephone: yup.string().required(),
    email: yup.string().required()
})

const contactSchemaUpdate = yup.object().shape({
    name: yup.string(),
    telephone: yup.string(),
    email: yup.string().email()
})

export { userSchema, userSchemaUpdate, contactSchema, contactSchemaUpdate }