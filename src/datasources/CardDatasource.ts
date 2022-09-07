import { HTTPDataSource } from 'apollo-datasource-http';
import { Pool } from 'undici';
import { GqlCard, GqlCards, GqlSymbology, GqlSymbologyParseManaType } from '../model/graphql';

enum ResponseFormat {
  JSON = 'json',
  TEXT = 'text',
  IMAGE = 'image',
}

export class CardDatasource extends HTTPDataSource {
  constructor(baseURL: string, pool: Pool) {
    super(baseURL, {
      pool,
      // requestOptions: {
      //   requestCache: {
      //     maxTtl: 86400,
      //     maxTtlIfError: 0,
      //   },
      // },
    });
  }

  async getRandom(q?: string, format?: ResponseFormat, face?: string, version?: string) {
    return this.get<GqlCard>(`/cards/random`);
  }

  async search(q: string, unique?: string) {
    return this.get<GqlCards>(`/cards/search`, {
      query: { q, unique },
      requestCache: { maxTtl: 86400, maxTtlIfError: 0 },
    });
  }
}
