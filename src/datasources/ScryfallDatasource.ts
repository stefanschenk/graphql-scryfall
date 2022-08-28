import { HTTPDataSource } from 'apollo-datasource-http';
import type { Request, Response } from 'apollo-datasource-http';
import { Pool } from 'undici';

export class ScryfallDatasource extends HTTPDataSource {
  // constructor() {
  //   // Always call super()
  //   super();
  //   // Sets the base URL for the REST API
  //   this.baseURL = 'https://api.scryfall.com';
  // }
  //
  // async getCatalogLandTypes() {
  //   // Send a GET request to the specified endpoint
  //   return this.get(`/catalog/land-types`);
  // }
  constructor(baseURL: string, pool: Pool) {
    // global client options
    // set cache TTL for each request in this datasource
    super(baseURL, {
      pool,
      requestOptions: {
        requestCache: {
          maxTtl: 86400, // 24h, Scryfall has daily incremental updates, fetching more frequently than 24 hours does not yield new data
          maxTtlIfError: 0, // also 24h, will respond with the cached response in case of an error
        },
      },
    });
    // super(baseURL, {
    //   pool,
    //   clientOptions: {
    //     bodyTimeout: 5000,
    //     headersTimeout: 2000,
    //   },
    //   // requestOptions: {
    //   //   headers: {
    //   //     'X-Client': 'client',
    //   //   },
    //   // },
    // });
  }

  protected onResponse<TResult = unknown>(request: Request, response: Response<TResult>): Response<TResult> {
    // console.log('response received: ', response);
    return super.onResponse(request, response);
  }

  async getCatalogLandTypes() {
    return this.get(`/catalog/land-types`);
  }

  async getCardNames() {
    return this.get(`/catalog/card-names`);
  }
}
