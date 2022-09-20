import Joi from "joi";
import { Comment } from "@prisma/client";

export type CommentInput = Omit<Comment, "id" | "gameId">;
export type CommentPost = Omit<Comment, "id">;

export const commentSchema = Joi.object<CommentInput>({
  userName: Joi.string().max(30).required(),
  imageUrl: Joi.string().required(),
  comment: Joi.string().max(1000).required(),
});
