//Definir como ocorre a busca no DB

export const resolvers = {
  Query: {
    links: async (parent, args, ctx) => {
      const results = await ctx.prisma.link.findMany();
      return results;
    },
  },
};
