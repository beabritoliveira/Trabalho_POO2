-- CreateTable
CREATE TABLE "Recem_Nascido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "altura" REAL NOT NULL,
    "peso" REAL NOT NULL,
    "naturalidade" TEXT NOT NULL,
    "maeId" INTEGER NOT NULL,
    CONSTRAINT "Recem_Nascido_maeId_fkey" FOREIGN KEY ("maeId") REFERENCES "Mae" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mae" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT,
    "telefone" TEXT,
    "data_nascimento" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Medico" (
    "CRM" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT,
    "especializada" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Parto" (
    "idParto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "medID" INTEGER NOT NULL,
    "pacID" INTEGER NOT NULL,
    CONSTRAINT "Parto_medID_fkey" FOREIGN KEY ("medID") REFERENCES "Medico" ("CRM") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Parto_pacID_fkey" FOREIGN KEY ("pacID") REFERENCES "Mae" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
