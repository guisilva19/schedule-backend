import * as express from 'express'
import { IContact, IUser } from '../../interfaces'

declare global {
    namespace Express {
      interface Request {
        user: IUser;
        validated: IUser;
      }
    }
  }