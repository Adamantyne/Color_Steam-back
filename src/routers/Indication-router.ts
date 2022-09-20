import { Router } from "express";

import schemaValidator from "../middlewares/schemaValidator.js";
import { getAllIndications, postIndication } from "../controllers/indication-controller.js";
import { indicationSchema } from "../schemas/indication-schema.js";

const indicationRouter = Router();

indicationRouter.get("/indication", getAllIndications);
indicationRouter.post(
  "/indication",
  schemaValidator(indicationSchema),
  postIndication
);

export default indicationRouter;
