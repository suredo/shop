import { Request, Response } from "express";
import product from "../models/productModel";

export class ProductController {
  public getProducts(req: Request, res: Response) {
    product
      .find({})
      .then((response) => res.send(response))
      .catch((err) => console.log(err));
  }
}
