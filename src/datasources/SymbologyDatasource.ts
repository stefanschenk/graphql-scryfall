import { HTTPDataSource } from 'apollo-datasource-http';
import { Pool } from 'undici';
import { GqlSymbology, GqlSymbologyParseManaType } from '../model/graphql';

export class SymbologyDatasource extends HTTPDataSource {
  constructor(baseURL: string, pool: Pool) {
    super(baseURL, {
      pool,
    });
  }

  async getSymbology() {
    return this.get<GqlSymbology>(`/symbology`, {
      requestCache: {
        maxTtl: 86400,
        maxTtlIfError: 0,
      },
    });
  }

  async getSymbologyParseMana(cost: string) {
    return this.get<GqlSymbologyParseManaType>(`/symbology/parse-mana`, {
      query: { cost },
      requestCache: { maxTtl: -1, maxTtlIfError: 0 },
    });
  }
}
