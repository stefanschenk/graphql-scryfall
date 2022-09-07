import { Pool } from 'undici';
import { serverConfig } from '../../etc/config';
import { CardDatasource } from './CardDatasource';
import { CatalogDatasource } from './CatalogDatasource';
import { SetDatasource } from './SetDatasource';
import { SymbologyDatasource } from './SymbologyDatasource';

const { scryfallHost } = serverConfig;

const baseURL = `https://${scryfallHost}`;
const pool = new Pool(baseURL);

export const dataSources = () => ({
  card: new CardDatasource(baseURL, pool),
  catalog: new CatalogDatasource(baseURL, pool),
  set: new SetDatasource(baseURL, pool),
  symbology: new SymbologyDatasource(baseURL, pool),
});
