import { Pool } from 'undici';
import { serverConfig } from '../../etc/config';
import { CatalogDatasource } from './CatalogDatasource';
import { SymbologyDatasource } from './SymbologyDatasource';

const { scryfallHost } = serverConfig;

const baseURL = `https://${scryfallHost}`;
const pool = new Pool(baseURL);

export const dataSources = () => ({
  catalog: new CatalogDatasource(baseURL, pool),
  symbology: new SymbologyDatasource(baseURL, pool),
});
