import { prisma } from "../database.js";
import { CommentPost } from "../schemas/comment-schema.js";

async function findAll() {
  return prisma.comment.findMany({});
}

async function findGameComments(gameId: number) {
  return prisma.comment.findMany({ where: { gameId } });
}

async function postComment(commentData: CommentPost) {
  return prisma.comment.create({ data: commentData });
}

const commentRepository = { findAll, findGameComments, postComment };
export default commentRepository;
