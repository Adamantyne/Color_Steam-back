import { Request, Response } from "express";

import commentService from "../services/comment-service.js";
import { CommentInput } from "../schemas/comment-schema.js";

export async function getAllComments(req: Request, res: Response) {
  const comments = await commentService.gettingAllComments();
  res.status(200).send(comments);
}

export async function getGameComments(req: Request, res: Response) {
  const { gameId } = req.params;
  const comments = await commentService.gettingGameComments(+gameId);
  res.status(200).send(comments);
}

export async function postComment(req: Request, res: Response) {
  const { gameId } = req.params;
  const commentInput: CommentInput = req.body;
  const commentData = { ...commentInput, gameId: +gameId };
  await commentService.postingComment(commentData);
  res.sendStatus(201);
}
