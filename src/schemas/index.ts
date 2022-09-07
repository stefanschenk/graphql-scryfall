import 'graphql-import-node';
import directives from './directives.graphql';
import queries from './queries.graphql';
import types from './types.graphql';
import featureCard from '../features/card/card.graphql';
import featureCatalog from '../features/catalog/catalog.graphql';
import featureSet from '../features/set/set.graphql';
import featureSymbology from '../features/symbology/symbology.graphql';

export default [directives, queries, types, featureCard, featureCatalog, featureSet, featureSymbology];
