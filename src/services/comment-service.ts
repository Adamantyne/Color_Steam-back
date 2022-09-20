import commentRepository from "../repositories/comment-repository.js";
import { CommentPost } from "../schemas/comment-schema.js";

async function gettingAllComments() {
  return commentRepository.findAll();
}

async function gettingGameComments(gameId: number) {
  return commentRepository.findGameComments(gameId);
}

async function postingComment(commentData: CommentPost) {
  return commentRepository.postComment(commentData);
}

const commentService = {
  gettingAllComments,
  gettingGameComments,
  postingComment,
};
export default commentService;
