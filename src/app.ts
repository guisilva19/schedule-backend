import "reflect-metadata";
import "express-async-errors"
import express from 'express';
import { AppRoutes } from "./routes/routes";
import { handleErrorMiddleware } from './middleware/handleError.middleware';

const cors = require("cors")
const app = express()


app.use(cors())
app.use(express.json())
AppRoutes(app)
app.use(handleErrorMiddleware)


export default app