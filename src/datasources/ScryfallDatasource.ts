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
    super(baseURL, {
      pool,
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
    return this.get(`/catalog/land-types`, {
      requestCache: {
        maxTtl: 10 * 60, // 10min, will respond for 10min with the cached result (updated every 10min)
        maxTtlIfError: 30 * 60, // 30min, will respond with the cached response in case of an error (for further 20min)
      },
    });
  }
}
