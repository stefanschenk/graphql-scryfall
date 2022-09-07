import { dataSources } from '../../datasources';
import { GqlSymbology, GqlSymbologyParseManaType } from '../../model/graphql';

type DataSources = ReturnType<typeof dataSources>;

interface ContextWithDataSources {
  dataSources: DataSources;
}

export default {
  Query: {
    symbology: async (root: unknown, args: unknown, { dataSources }: ContextWithDataSources): Promise<GqlSymbology> => {
      const result = await dataSources.symbology.getSymbology();
      return result.body;
    },
    symbologyParseMana: async (
      root: unknown,
      args: { cost: string },
      { dataSources }: ContextWithDataSources,
    ): Promise<GqlSymbologyParseManaType> => {
      const result = await dataSources.symbology.getSymbologyParseMana(args.cost);
      return result.body;
    },
  },
};
