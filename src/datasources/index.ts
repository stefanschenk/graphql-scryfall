import { Pool } from 'undici';
import { serverConfig } from '../../etc/config';
import { ScryfallDatasource } from './ScryfallDatasource';

const { scryfallHost } = serverConfig;

const baseURL = `https://${scryfallHost}`;
const pool = new Pool(baseURL);

export const dataSources = () => ({ scryfall: new ScryfallDatasource(baseURL, pool) });
