import { dataSources } from '../../datasources';

type DataSources = ReturnType<typeof dataSources>;

interface ContextWithDataSources {
  dataSources: DataSources;
}

export default {
  Query: {
    symbology: async (root: unknown, args: unknown, { dataSources }: ContextWithDataSources) => {
      const result = await dataSources.symbology.getSymbology();
      return result.body;
    },
    symbologyParseMana: async (root: unknown, args: { cost: string }, { dataSources }: ContextWithDataSources) => {
      const result = await dataSources.symbology.getSymbologyParseMana(args.cost);
      return result.body;
    },
  },
};
