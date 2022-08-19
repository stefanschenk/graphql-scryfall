import { dataSources } from '../datasources';

type DataSources = ReturnType<typeof dataSources>;

interface ContextWithDataSources {
  dataSources: DataSources;
}

export const resolvers = {
  Query: {
    catalogLandTypes: async (root: unknown, args: unknown, { dataSources }: ContextWithDataSources) => {
      const result = await dataSources.scryfall.getCatalogLandTypes();
      return result.body;
    },
  },
};
