
import { Request, Response } from 'express';
import { db } from '../config/db.js'
import { Model } from '../model/Model.js';
import { User } from '../model/User.js'
import { BasicController } from './BasicConroller.js';

// let user = new User();

export class UserController extends BasicController {
    tableName: string = 'person';
    
    constructor () {
        super(new User())
    }
}