import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {
  const user = await prisma.mae.create({
    data: {
        nome: "Francisley",
        data_nascimento: "2000-12-01T16:56:00-01:00"
    },/*
    data: {
        nome: "Ana Laura",
        altura: 0.50,
        peso: 2.5,
        naturalidade: "Ipatinga",
        data_nascimento: "2022-02-06T08:12:00-01:00",
        maeId: 6
    },*/
  })
  const users = await prisma.mae.findMany();
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })