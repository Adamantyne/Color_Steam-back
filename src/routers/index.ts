import { Router } from "express";

import gameRouter from "./game-router.js";
import commentRouter from "./comment-Router.js";
import indicationRouter from "./Indication-router.js";

const routers = Router();

routers.use(gameRouter);
routers.use(commentRouter);
routers.use(indicationRouter);

export default routers;