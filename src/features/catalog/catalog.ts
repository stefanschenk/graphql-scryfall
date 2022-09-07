import { dataSources } from '../../datasources';

type DataSources = ReturnType<typeof dataSources>;

interface ContextWithDataSources {
  dataSources: DataSources;
}

export default {
  Query: {
    catalogArtistNames: async (root: unknown, args: unknown, { dataSources }: ContextWithDataSources) => {
      const result = await dataSources.catalog.getArtistNames();
      return result.body;
    },
    catalogCardNames: async (root: unknown, args: unknown, { dataSources }: ContextWithDataSources) => {
      const result = await dataSources.catalog.getCardNames();
      return result.body;
    },
    catalogLandTypes: async (root: unknown, args: unknown, { dataSources }: ContextWithDataSources) => {
      const result = await dataSources.catalog.getCatalogLandTypes();
      return result.body;
    },
  },
};
