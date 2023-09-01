## Projeto modelagem de um sistema: Berçário 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#### Alunas: Beatriz Brito Oliveira, Cecilia de Jesus Barros, Maria Luiza Souza Pinheiro
#### Professor: Otavio Lube dos Santos
#### Turma: CC3MB
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Foi realizado a criação de uma modelagem de classe, sem a criação de nenhuma classe e somente de atributos inicialmente. Tomando como base o texto:
* "Um berçário deseja informatizar suas operações. Quando um bebê nasce, algumas informações são armazenadas sobre ele, tais como: nome, data do nascimento, peso do nascimento, altura, a mãe deste bebê e o médico que fez seu parto. Para as mães, o berçário também deseja manter um controle, guardando informações como: nome, endereço, telefone e data de nascimento. Para os médicos, é importante saber: CRM, nome, telefone celular e especialidade."
* Dessa forma foi criado as seguintes classes: *Recem_Nascido*, *Projenitora*, *Medico* e *Parto*. A classe Parto foi criada para que ligasse as tabelas do recem nascidos com a tabela médico, sem que necessariamente houvesse os identificadores de cada um deles na classe do outro.
* A seguir se foi realizada a implementação da modelagem na plataforma do Visual Studio Code utilizando Prisma, Node/Typescript. Fazendo a modelação das classes no *`schema.prisma`*, localizada dentro da pasta prisma.
* Além disso, houve-se a criação do arquivo *`script.ts`* com que permitiu o povoamento das classes dentro de uma função assíncrona que cria vetores que após serão instanciado dentro de um loop for.
