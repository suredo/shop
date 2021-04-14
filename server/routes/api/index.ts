import { Router } from "express";
import { ProductController } from "../../controllers/productController";

const productController = new ProductController();

export class ProductRoutes {
  private routes: Router;

  constructor() {
    this.routes = Router();
    this.endpoints();
  }

  private endpoints() {
    this.routes.get("/", productController.getProducts);
  }

  public getRoutes() {
    return this.routes;
  }
}
