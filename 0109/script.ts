import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {
    const maeData = [
      {
        nome: "Geovana",
        data_nascimento: "1976-06-21T16:56:00-01:00",
      },
      {
        nome: "Maria",
        data_nascimento: "1980-04-15T14:30:00-01:00",
      },
      {
        nome: "Angélica",
        data_nascimento: "1980-04-15T14:30:00-01:00",
      },
      {
        nome: "Nilce",
        data_nascimento: "1980-04-15T14:30:00-01:00",
      }
    ];
  
  for (const data of maeData) {
    const mae = await prisma.mae.create({
      data: data,
    });
    console.log(mae);
  }


  const num = await prisma.mae.count();
  const dat = new Date();
  const bebeData = [
    {
      nome: "Julia",
      altura: 0.47,
      peso: 1.7,
      naturalidade: "Vila Velha",
      data_nascimento: dat,
      maeId: randomInt(num) + 1
    }, 
    {
      nome: "Katharina",
      altura: 0.40,
      peso: 2.0,
      naturalidade: "Colatina",
      data_nascimento: dat,
      maeId: randomInt(num) + 1
    }, 
    {
      nome: "Lorenzo",
      altura: 0.50,
      peso: 2.4,
      naturalidade: "Linhares",
      data_nascimento: dat,
      maeId: randomInt(num) + 1
    }, 
    {
      nome: "Hugo",
      altura: 0.55,
      peso: 2.6,
      naturalidade: "Aracruz",
      data_nascimento: dat,
      maeId: randomInt(num) + 1
    }, 
    {
      nome: "Lorenzo",
      altura: 0.50,
      peso: 2.4,
      naturalidade: "Linhares",
      data_nascimento: dat,
      maeId: randomInt(num) + 1
    },
    {
      nome: "Luana",
      altura: 0.56,
      peso: 2.2,
      naturalidade: "Fundão",
      data_nascimento: dat,
      maeId: randomInt(num) + 1
    }, 
    {
      nome: "Eloise",
      altura: 0.43,
      peso: 2.13,
      naturalidade: "Vitória",
      data_nascimento: dat,
      maeId: randomInt(num) + 1
    }, 
    {
      nome: "Bernardo",
      altura: 0.56,
      peso: 2.7,
      naturalidade: "Linhares",
      data_nascimento: dat,
      maeId: randomInt(num) + 1
    }, 
    {
      nome: "Pedro",
      altura: 0.49,
      peso: 1.8,
      naturalidade: "Linhares",
      data_nascimento: dat,
      maeId: randomInt(num) + 1
    }    
  ]
  for (const data of bebeData) {
    const bebe = await prisma.recem_Nascido.create({
      data: data,
  });
    console.log(bebe);
  }

  /*const users = await prisma.mae.findMany();
  console.log(users);*/
}

const medicoData =[
      {
        CRM: 963852,
        nome: "Marcelo",
        especializada: "Obstetra",
      },
      {
        CRM: 987654,
        nome: "Roberta",
        especializada: "Obstetra",
      },
      {
        CRM: 654123,
        nome: "Manoel",
        especializada: "Obstetra",
      },
      {
        CRM: 875421,
        nome: "Paulo",
        especializada: "Obstetra",
      },
      {
        CRM: 741852,
        nome: "Monica",
        especializada: "Obstetra",
      },
      {
        CRM: 751852,
        nome: "Juliano",
        especializada: "Obstetra",
      },
      {
        CRM: 761852,
        nome: "Alcione",
        especializada: "Obstetra",
      },
      {
        CRM: 742852,
        nome: "Magno",
        especializada: "Obstetra",
      },
      {
        CRM: 202315,
        nome: "Orli",
        especializada: "Obstetra",
      },
      {
        CRM: 301508,
        nome: "Heloiza",
        especializada: "Obstetra",
      },
    ];
    for (const data of medicoData) {
      const medico = await prisma.medico.create({
        data: data,
      });
      console.log(medico);
    }
     const medicos = await prisma.medico.findMany();
  console.log(medicos);

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
