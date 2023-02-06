class AppError extends Error {
    statusCode: number;
    message: string;


    constructor(message: string, statusCode: number = 400) {
        super()
        this.statusCode = statusCode
        this.message = message
    }
}

export { AppError }



