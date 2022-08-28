import 'graphql-import-node';
import queries from './queries.graphql';
import types from './types.graphql';
import featureCatalog from '../features/catalog/catalog.graphql';
import featureSymbology from '../features/symbology/symbology.graphql';

export default [queries, types, featureCatalog, featureSymbology];
