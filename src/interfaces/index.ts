export interface IUser {
    id: String | Number
    name: String
    email: String
    password: String
    telephone: String
}

export interface ISession {
    email: String
    password?: String | Buffer
}


export interface IContact {
    name: String
    email: String
    telephone: String
}