import { Request, Response } from "express";
import gameService from "../services/game-service.js";

export async function getAllGames(req: Request, res: Response) {
  const games = await gameService.gettingGames();
  res.status(200).send(games);
}

export async function getGame(req: Request, res: Response) {
  const game = res.locals.gameData;
  res.status(200).send(game);
}
