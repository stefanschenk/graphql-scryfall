interface ReleaseInfo {
  name: string;
  version: string;
  description: string;
}

export default {
  Query: {
    releaseInfo: (): ReleaseInfo => ({
      name: 'GraphQL Scryfall',
      version: '0.0.1',
      description: 'NodeJS/Express GraphQL server to connect with scryfall.com api',
    }),
  },
};
