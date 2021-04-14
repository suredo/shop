import { Router } from "express";
import { ProductController } from "../../controllers/productController";

const todoController = new ProductController();

export class TodoRoutes {
  private routes: Router;

  constructor() {
    this.routes = Router();
    this.endpoints();
  }

  private endpoints() {
    this.routes.get("/", todoController.getProducts);
  }

  public getRoutes() {
    return this.routes;
  }
}
