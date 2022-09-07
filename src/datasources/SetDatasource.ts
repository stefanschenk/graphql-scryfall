import { HTTPDataSource } from 'apollo-datasource-http';
import { Pool } from 'undici';
import { GqlCard, GqlSet, GqlSymbology, GqlSymbologyParseManaType } from '../model/graphql';

enum ResponseFormat {
  JSON = 'json',
  TEXT = 'text',
  IMAGE = 'image',
}

export class SetDatasource extends HTTPDataSource {
  constructor(baseURL: string, pool: Pool) {
    super(baseURL, {
      pool,
      requestOptions: {
        requestCache: {
          maxTtl: 86400,
          maxTtlIfError: 0,
        },
      },
    });
  }

  async getSets() {
    return this.get<GqlSet[]>(`/sets`);
  }

  async getSetByCode(code: string) {
    return this.get<GqlSet>(`/sets/${code}`);
  }

  async getSetById(id: string) {
    return this.get<GqlSet>(`/sets/${id}`);
  }
}
