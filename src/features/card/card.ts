import { dataSources } from '../../datasources';
import { GqlCard, GqlCards } from '../../model/graphql';

type DataSources = ReturnType<typeof dataSources>;

interface ContextWithDataSources {
  dataSources: DataSources;
}

export default {
  Legality: {
    LEGAL: 'legal',
    NOT_LEGAL: 'not_legal',
    RESTRICTED: 'restricted',
    BANNED: 'banned',
  },
  Rarity: {
    COMMON: 'common',
    UNCOMMON: 'uncommon',
    RARE: 'rare',
    MYTHIC: 'mythic',
  },
  Query: {
    cardRandom: async (root: unknown, args: unknown, { dataSources }: ContextWithDataSources): Promise<GqlCard> => {
      const result = await dataSources.card.getRandom();
      return result.body;
    },
    cardSearch: async (
      root: unknown,
      args: { q: string; unique?: string },
      { dataSources }: ContextWithDataSources,
    ): Promise<GqlCards> => {
      const result = await dataSources.card.search(args.q, args.unique);
      return result.body;
    },
  },
};
