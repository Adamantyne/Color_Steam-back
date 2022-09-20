import gameRepository from "../repositories/game-repository.js";

async function gettingGames() {
  return gameRepository.findAll();
}

async function gettingGame(id: number) {
  return gameRepository.findOne(id);
}

const gameService = { gettingGames, gettingGame };
export default gameService;
