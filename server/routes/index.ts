import { Router } from "express";
import { ProductRoutes } from "./api";

export class Routes {
  private routes: Router;
  constructor() {
    this.routes = Router();
    this.endpoints();
  }

  private endpoints() {
    this.routes.use("/auth", (req, res) => {
      res.send("Not Implemented");
    });
    this.routes.use("/api", new ProductRoutes().getRoutes());
  }

  public getRoutes() {
    return this.routes;
  }
}
