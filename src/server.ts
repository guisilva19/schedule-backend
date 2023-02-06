import app from "./app";
import { AppDataSource } from "./data-source";
import 'dotenv/config'

( async () => {
    await AppDataSource.initialize().catch((err) => {
        console.error("Error server", err);
    })

    app.listen(process.env.PORT || 3001,() => {
        console.log('Server is running')
    })
})()