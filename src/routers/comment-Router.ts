import { Router } from "express";

import schemaValidator from "../middlewares/schemaValidator.js";
import { getGameComments, getAllComments, postComment } from "../controllers/comment-controller.js";
import { commentsMiddleware } from "../middlewares/comment-middleware.js";
import { commentSchema } from "../schemas/comment-schema.js";

const commentRouter = Router();

commentRouter.get("/comments", getAllComments);
commentRouter.get("/comments/:gameId", commentsMiddleware, getGameComments);
commentRouter.post(
  "/comments/:gameId",
  schemaValidator(commentSchema),
  commentsMiddleware,
  postComment
);

export default commentRouter;
