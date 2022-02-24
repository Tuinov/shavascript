import { NextFunction, Request, Response } from "express";
import { Product } from "../model/Product";
import { get, controller, use, bodyValidator, post } from './decorators';

const product = new Product()


@controller('/tren')
class TrenController {

  @get('/all')
  async getAll(req: Request, res: Response) {
    const users = await product.getAll();
    res.json(users)
  }
}