import { PrismaClient } from "@prisma/client";

//Next.js no modo de desenvolvimento recria o código várias vezes, e isso pode dar problema no DB pro causa do excesso de conexões, em produção não acontece isso pois o código é somente lido e não alterado.

//declarar uma variavel global para evitar esse problema
declare global {
  var prisma: PrismaClient | undefined;
}

//Se tiver variavel global do prisma rodando, usa ela, se não, instancia uma nova
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
