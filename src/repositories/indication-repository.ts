import { prisma } from "../database.js";

import { IndicationInput } from "../schemas/indication-schema.js";

async function create(indicationData: IndicationInput) {
  return prisma.indication.create({
    data: indicationData,
  });
}

async function findAll() {
  return prisma.indication.findMany({});
}

const indicationRepository = { create, findAll };
export default indicationRepository;
