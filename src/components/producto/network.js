import { Router } from "express";
import * as Controller from "./controller";

const productRouter = Router();
productRouter.route("/").get(Controller.findAll);
productRouter.route("/").post(Controller.create);
productRouter.route("/update/:id").put(Controller.update);
productRouter.route("/delete/:id").delete(Controller.remove);
export default productRouter;