import supertest from "supertest";

import { prisma } from "../src/database.js";
import app from "../src/app.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE tableName;`;
});

describe("generic tests", () => {
  it("return not found", async () => {
    const response = await supertest(app).get("/not_found");
    expect(response.statusCode).toEqual(404);
  });
});

//call tests functions here

afterAll(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE tableName;`;
  await prisma.$disconnect();
});
