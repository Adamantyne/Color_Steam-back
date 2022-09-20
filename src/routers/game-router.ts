import { Router } from "express";

import { getAllGames, getGame } from "../controllers/game-controller.js";
import { getGameMiddleware } from "../middlewares/game-middleware.js";

const gameRouter = Router();

gameRouter.get("/games", getAllGames);
gameRouter.get("/games/:id", getGameMiddleware, getGame);

export default gameRouter;
