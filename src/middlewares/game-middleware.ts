import { NextFunction, Request, Response } from "express";

import { wrongSchemaError, notFoundError } from "../utils/errorUtils.js";
import gameRepository from "../repositories/game-repository.js";

export async function getGameMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const gameId = req.params.id;
  if (isNaN(+gameId)) {
    throw wrongSchemaError("game id must be a numeric value");
  }
  const game = await gameRepository.findOne(+gameId);
  if (!game) {
    throw notFoundError("game not found");
  }
  res.locals.gameData = game;
  next();
}
