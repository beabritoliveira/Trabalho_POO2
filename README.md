# Trabalho_POO2
email: cat68046@zbock.com


-------------------------
###### npm init -y
###### npm install typescript ts-node @types/node --save-dev
###### npx tsc --init
###### npm install prisma --save-dev
###### npx prisma init --datasource-provider sqlite
###### npx prisma migrate dev --create-only
###### npx prisma migrate dev   // depois de alterar o schema.prisma
--------------------------
###### obs: continuando o quickstart no passo 4 tem o seguinte comando: `touch script.ts`, massss tem um probleminha... o comando não é reconhecido pelo windows. Pesquisando na internet eu achei um comando que faria com que esse código seria compatível com o windows: `npm install touch-cli -g`. MAS pode ser que dê outro erro pq a execução do script foi desabilidtada no sistema. Caso isso aconteça basta você mudar a permição com os seguintes comandos: 
###### `Get-ExecutionPolicy` // aqui você vai ver qual é o status da permissão.
###### `Set-ExecutionPolicy` // você vai setar uma nova permissão (eu coloquei como RemoteSigned)
###### Por fim você vai conseguir rodar o comando `touch script.ts`.



---------------------------------
#### COMO DELETAR UMA ROW
async function main() {
  const user = await prisma.mae.delete({
    where:{
      id: _ //SE ELA TIVER UM DEPENDENTE TEM QUE DELETAR ELE PRIMEIRO
    }
  })}
