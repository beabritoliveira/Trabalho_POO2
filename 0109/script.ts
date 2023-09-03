import { PrismaClient } from '@prisma/client'
import { randomInt } from 'crypto';

const prisma = new PrismaClient()


async function main() {
    const maeData = [
      {
            nome: "Maria",
            data_nascimento: "1990-04-15T14:30:00-01:00",
            endereco:"567 Rua das Flores, Vila Velha, Espírito Santo",
            telefone: "(27)99164-5608"
      },
      {
            nome: "Angélica",
            data_nascimento: "1989-04-05T14:30:00-01:00",
            endereco:"234 Rua 7, Linhares, Espírito Santo",
            telefone: "(27)97484-8607"
      },
      {
            nome: "Nilce",
            data_nascimento: "1986-06-25T14:30:00-01:00",
            endereco:"1234 Avenida da Paz, Colatina, Espírito Santo",
            telefone: "(27)9098-66778"
      },
      {
            nome: "Ana",
            data_nascimento: "1987-07-11T14:30:00-01:00",
            endereco:"1854 Avenida 3, Guarapari, Espírito Santo",
            telefone: "(27)9098-66098"
      },
      {
            nome: "Clarice",
            data_nascimento: "1995-01-28T17:00:00-01:00",
            endereco:"456 Avenida 54, Vitória, Espírito Santo",
            telefone: "(27)92886-3098"
      },
      {
            nome: "Danielle",
            data_nascimento: "1993-11-20T18:30:00-01:00",
            endereco:"4867 Avenida Secundária, Vitória, Espírito Santo",
            telefone: "(27)96886-6098"
      },
      {
            nome: "Fátima",
            data_nascimento: "1982-09-27T14:30:00-01:00",
            endereco:"2754 Rua Principal, Vitória, Espírito Santo",
            telefone: "(27)94386-6308"
      }, 
      {
            nome: "Alice",
            data_nascimento: "1995-01-10T12:00:00-01:00",
            endereco: "123 Rua 6, Vitória, Espírito Santo",
            telefone: "(27)98765-4321"
      },
      {
            nome: "Laura",
            data_nascimento: "1983-09-15T14:00:00-01:00",
            endereco: "567 Rua da Praia, Guarapari, Espírito Santo",
            telefone: "(27)95555-5555"
      },
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

  const medicoData =[
      {
        CRM: 963852,
        nome: "Marcelo",
        especializacao: "Pediatra",
      },
      {
        CRM: 987654,
        nome: "Roberta",
        especializacao: "Anestesista",
      },
      {
        CRM: 654123,
        nome: "Manoel",
        especializacao: "Obstetra",
      },
      {
        CRM: 875421,
        nome: "Paulo",
        especializacao: "Pediatra",
      },
      {
        CRM: 741852,
        nome: "Monica",
        especializacao: "Anestesista",
      },
      {
        CRM: 751852,
        nome: "Juliano",
        especializacao: "Obstetra",
      },
      {
        CRM: 761852,
        nome: "Alcione",
        especializacao: "Obstetra",
      },
      {
        CRM: 742852,
        nome: "Magno",
        especializacao: "Pediatra",
      },
      {
        CRM: 202315,
        nome: "Orli",
        especializacao: "Anestesista",
      },
      {
        CRM: 301508,
        nome: "Heloiza",
        especializacao: "Obstetra",
      },
    ];
  for (const data of medicoData) {
      const medico = await prisma.medico.create({
        data: data,
      });
      console.log(medico);
    }
      
  const partoData = [
        {
            data: dat,
            medID: 963852,
            pacID: 1
        },
        {
            data: dat,
            medID: 987654,
            pacID: 2
        },
        {
            data: dat,
            medID: 654123,
            pacID: 3
        },
        {
            data: dat,
            medID: 875421,
            pacID: 4
        },
        {
            data: dat,
            medID: 741852,
            pacID: 5
        },
        {
            data: dat,
            medID: 751852,
            pacID: 6
        },
        {
            data: dat,
            medID: 761852,
            pacID: 7
        },
        {
            data: dat,
            medID: 742852,
            pacID: 8
        },
        {
            data: dat,
            medID: 202315,
            pacID: 9
        }, 
    ];
  for (const data of partoData) {
        const parto = await prisma.parto.create({
          data: data
        });
        console.log(parto);
    }

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
