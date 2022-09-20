import { prisma } from "../database.js";


async function findAll() {
  return prisma.game.findMany({});
}

async function findOne(id:number) {
  return prisma.game.findUnique({where:{id}});
}

const gameRepository = { findAll, findOne };
export default gameRepository;
