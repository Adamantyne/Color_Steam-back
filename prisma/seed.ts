import { prisma } from "../src/database.js";

async function main() {
  await prisma.game.createMany({
    data: [
      {
        title: "gris",
        imageUrl: "imagem url",
        iconUrl: "https://notadogame.com/uploads/game/cover/250x/5c1b9e9c96312.jpg",
        description: "descrição",
      },
      {
        title: "night in the woods",
        imageUrl: "imagem url2",
        iconUrl: "https://cdn1.epicgames.com/abd29ccc8c2a4a40a31f27de63cb0603/offer/EGS_NightintheWoods_InfiniteFall_S2-1200x1600-c6e902bb51df819a40f3b3f2b8081849.jpg",
        description: "descrição2",
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
