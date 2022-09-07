import { dataSources } from '../../datasources';
import { GqlSet } from '../../model/graphql';

type DataSources = ReturnType<typeof dataSources>;

interface ContextWithDataSources {
  dataSources: DataSources;
}

export default {
  SetType: {
    core: 'A yearly Magic core set (Tenth Edition, etc)',
    expansion: 'A rotational expansion set in a block (Zendikar, etc)',
    masters: 'A reprint set that contains no new cards (Modern Masters, etc)',
    alchemy: 'An Arena set designed for Alchemy',
    masterpiece: 'Masterpiece Series premium foil cards',
    arsenal: 'A Commander-oriented gift set',
    from_the_vault: 'From the Vault gift sets',
    spellbook: 'Spellbook series gift sets',
    premium_deck: 'Premium Deck Series decks',
    duel_deck: 'Duel Decks',
    draft_innovation: 'Special draft sets, like Conspiracy and Battlebond',
    treasure_chest: 'Magic Online treasure chest prize sets',
    commander: 'Commander preconstructed decks',
    planechase: 'Planechase sets',
    archenemy: 'Archenemy sets',
    vanguard: 'Vanguard card sets',
    funny: 'A funny un-set or set with funny promos (Unglued, Happy Holidays, etc)',
    starter: 'A starter/introductory set (Portal, etc)',
    box: 'A gift box set',
    promo: 'A set that contains purely promotional cards',
    token: 'A set made up of tokens and emblems.',
    memorabilia: 'A set made up of gold-bordered, oversize, or trophy cards that are not legal',
  },
  Query: {
    sets: async (root: unknown, args: unknown, { dataSources }: ContextWithDataSources): Promise<GqlSet[]> => {
      const result = await dataSources.set.getSets();
      return result.body;
    },
    setByCode: async (
      root: unknown,
      args: { code: string },
      { dataSources }: ContextWithDataSources,
    ): Promise<GqlSet> => {
      const result = await dataSources.set.getSetByCode(args.code);
      return result.body;
    },
    setById: async (root: unknown, args: { id: string }, { dataSources }: ContextWithDataSources): Promise<GqlSet> => {
      const result = await dataSources.set.getSetById(args.id);
      return result.body;
    },
  },
};
