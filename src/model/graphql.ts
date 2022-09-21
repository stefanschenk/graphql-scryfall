import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GqlCard = {
  __typename?: 'Card';
  all_parts?: Maybe<Array<Maybe<GqlRelatedCard>>>;
  arena_id?: Maybe<Scalars['Int']>;
  artist?: Maybe<Scalars['String']>;
  artist_ids: Array<Maybe<Scalars['String']>>;
  booster: Scalars['Boolean'];
  border_color: Scalars['String'];
  card_back_id: Scalars['String'];
  card_faces?: Maybe<Array<Maybe<GqlCardFace>>>;
  cardmarket_id?: Maybe<Scalars['Int']>;
  cmc?: Maybe<Scalars['Float']>;
  collector_number: Scalars['String'];
  color_identity?: Maybe<Array<Maybe<Color>>>;
  color_indicator?: Maybe<Array<Maybe<Color>>>;
  colors?: Maybe<Array<Maybe<Color>>>;
  content_warning?: Maybe<Scalars['Boolean']>;
  digital: Scalars['Boolean'];
  edhrec_rank?: Maybe<Scalars['Int']>;
  finishes?: Maybe<Array<Maybe<Scalars['String']>>>;
  flavor_name?: Maybe<Scalars['String']>;
  flavor_text?: Maybe<Scalars['String']>;
  foil: Scalars['Boolean'];
  frame: Scalars['String'];
  frame_effects?: Maybe<Array<Maybe<Scalars['String']>>>;
  full_art: Scalars['Boolean'];
  games: Array<Scalars['String']>;
  hand_modifier?: Maybe<Scalars['String']>;
  highres_image: Scalars['Boolean'];
  id: Scalars['String'];
  illustration_id?: Maybe<Scalars['String']>;
  image_status: Scalars['String'];
  image_uris?: Maybe<GqlImageUris>;
  keywords: Array<Maybe<Scalars['String']>>;
  lang: Scalars['String'];
  layout: Scalars['String'];
  legalities: GqlLegalities;
  life_modifier?: Maybe<Scalars['String']>;
  loyalty?: Maybe<Scalars['String']>;
  mana_cost?: Maybe<Scalars['String']>;
  mtgo_foil_id?: Maybe<Scalars['Int']>;
  mtgo_id?: Maybe<Scalars['Int']>;
  multiverse_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name: Scalars['String'];
  nonfoil: Scalars['Boolean'];
  object: Scalars['String'];
  oracle_id: Scalars['String'];
  oracle_text?: Maybe<Scalars['String']>;
  oversized: Scalars['Boolean'];
  penny_rank?: Maybe<Scalars['Int']>;
  power?: Maybe<Scalars['String']>;
  preview?: Maybe<GqlPreview>;
  prices: GqlPrices;
  printed_name?: Maybe<Scalars['String']>;
  printed_text?: Maybe<Scalars['String']>;
  printed_type_line?: Maybe<Scalars['String']>;
  prints_search_uri: Scalars['String'];
  produced_mana?: Maybe<Array<Maybe<Color>>>;
  promo: Scalars['Boolean'];
  promo_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  purchase_uris?: Maybe<GqlPurchaseUris>;
  rarity: Rarity;
  related_uris?: Maybe<GqlRelatedUris>;
  released_at: Scalars['String'];
  reprint: Scalars['Boolean'];
  reserved: Scalars['Boolean'];
  rulings_uri: Scalars['String'];
  scryfall_set_uri: Scalars['String'];
  scryfall_uri: Scalars['String'];
  security_stamp?: Maybe<Scalars['String']>;
  set: Scalars['String'];
  set_id: Scalars['String'];
  set_name: Scalars['String'];
  set_search_uri: Scalars['String'];
  set_type: Scalars['String'];
  set_uri: Scalars['String'];
  story_spotlight: Scalars['Boolean'];
  tcgplayer_etched_id?: Maybe<Scalars['Int']>;
  tcgplayer_id?: Maybe<Scalars['Int']>;
  textless: Scalars['Boolean'];
  toughness?: Maybe<Scalars['String']>;
  type_line: Scalars['String'];
  uri: Scalars['String'];
  variation: Scalars['Boolean'];
  variation_of?: Maybe<Scalars['String']>;
  watermark?: Maybe<Scalars['String']>;
};

export type GqlCardFace = {
  __typename?: 'CardFace';
  artist?: Maybe<Scalars['String']>;
  cmc?: Maybe<Scalars['Float']>;
  color_indicator?: Maybe<Array<Maybe<Color>>>;
  colors?: Maybe<Array<Maybe<Color>>>;
  flavor_text?: Maybe<Scalars['String']>;
  illustration_id?: Maybe<Scalars['String']>;
  image_uris?: Maybe<GqlImageUris>;
  layout?: Maybe<Scalars['String']>;
  loyalty?: Maybe<Scalars['String']>;
  mana_cost: Scalars['String'];
  name: Scalars['String'];
  object: Scalars['String'];
  oracle_id?: Maybe<Scalars['String']>;
  oracle_text?: Maybe<Scalars['String']>;
  power?: Maybe<Scalars['String']>;
  printed_name?: Maybe<Scalars['String']>;
  printed_text?: Maybe<Scalars['String']>;
  printed_type_line?: Maybe<Scalars['String']>;
  toughness?: Maybe<Scalars['String']>;
  type_line?: Maybe<Scalars['String']>;
  watermark?: Maybe<Scalars['String']>;
};

export type GqlCardSymbol = {
  __typename?: 'CardSymbol';
  appears_in_mana_costs: Scalars['Boolean'];
  cmc?: Maybe<Scalars['Float']>;
  colors: Array<Maybe<Color>>;
  english: Scalars['String'];
  funny: Scalars['Boolean'];
  gatherer_alternates?: Maybe<Array<Maybe<Scalars['String']>>>;
  loose_variant?: Maybe<Scalars['String']>;
  object: Scalars['String'];
  represents_mana: Scalars['Boolean'];
  svg_uri: Scalars['String'];
  symbol: Scalars['String'];
  transposable: Scalars['Boolean'];
};

export type GqlCards = GqlList & {
  __typename?: 'Cards';
  data: Array<GqlCard>;
  has_more: Scalars['Boolean'];
  next_page?: Maybe<Scalars['String']>;
  total_cards?: Maybe<Scalars['Int']>;
  warnings?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GqlCatalogType = {
  __typename?: 'CatalogType';
  data: Array<Scalars['String']>;
  object: Scalars['String'];
  total_values: Scalars['Int'];
  uri: Scalars['String'];
};

export enum Color {
  B = 'B',
  G = 'G',
  R = 'R',
  U = 'U',
  W = 'W'
}

export type GqlImageUris = {
  __typename?: 'ImageUris';
  art_crop?: Maybe<Scalars['String']>;
  border_crop?: Maybe<Scalars['String']>;
  large?: Maybe<Scalars['String']>;
  normal?: Maybe<Scalars['String']>;
  png?: Maybe<Scalars['String']>;
  small?: Maybe<Scalars['String']>;
};

export type GqlLegalities = {
  __typename?: 'Legalities';
  alchemy: Legality;
  brawl: Legality;
  commander: Legality;
  duel: Legality;
  explorer: Legality;
  future: Legality;
  gladiator: Legality;
  historic: Legality;
  historicbrawl: Legality;
  legacy: Legality;
  modern: Legality;
  oldschool: Legality;
  pauper: Legality;
  paupercommander: Legality;
  penny: Legality;
  pioneer: Legality;
  premodern: Legality;
  standard: Legality;
  vintage: Legality;
};

export enum Legality {
  BANNED = 'BANNED',
  LEGAL = 'LEGAL',
  NOT_LEGAL = 'NOT_LEGAL',
  RESTRICTED = 'RESTRICTED'
}

export type GqlList = {
  has_more: Scalars['Boolean'];
  next_page?: Maybe<Scalars['String']>;
  total_cards?: Maybe<Scalars['Int']>;
  warnings?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GqlPreview = {
  __typename?: 'Preview';
  previewed_at?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  source_uri?: Maybe<Scalars['String']>;
};

export type GqlPrices = {
  __typename?: 'Prices';
  eur?: Maybe<Scalars['String']>;
  eur_foil?: Maybe<Scalars['String']>;
  tix?: Maybe<Scalars['String']>;
  usd?: Maybe<Scalars['String']>;
  usd_etched?: Maybe<Scalars['String']>;
  usd_foil?: Maybe<Scalars['String']>;
};

export type GqlPurchaseUris = {
  __typename?: 'PurchaseUris';
  cardhoarder?: Maybe<Scalars['String']>;
  cardmarket?: Maybe<Scalars['String']>;
  tcgplayer?: Maybe<Scalars['String']>;
};

export type GqlQuery = {
  __typename?: 'Query';
  cardRandom: GqlCard;
  cardSearch: GqlCards;
  catalogArtistNames: GqlCatalogType;
  catalogCardNames: GqlCatalogType;
  catalogLandTypes: GqlCatalogType;
  releaseInfo: GqlReleaseInfo;
  setByCode: GqlSet;
  setById: GqlSet;
  sets: GqlSets;
  symbology: GqlSymbology;
  symbologyParseMana: GqlSymbologyParseManaType;
};


export type GqlQuerycardSearchArgs = {
  q: Scalars['String'];
  unique?: InputMaybe<Scalars['String']>;
};


export type GqlQuerysetByCodeArgs = {
  code: Scalars['String'];
};


export type GqlQuerysetByIdArgs = {
  id: Scalars['String'];
};


export type GqlQuerysymbologyParseManaArgs = {
  cost: Scalars['String'];
};

export enum Rarity {
  COMMON = 'COMMON',
  MYTHIC = 'MYTHIC',
  RARE = 'RARE',
  UNCOMMON = 'UNCOMMON',
  bonus = 'bonus',
  special = 'special'
}

export type GqlRelatedCard = {
  __typename?: 'RelatedCard';
  component: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  object: Scalars['String'];
  type_line: Scalars['String'];
  uri: Scalars['String'];
};

export type GqlRelatedUris = {
  __typename?: 'RelatedUris';
  edhrec?: Maybe<Scalars['String']>;
  gatherer?: Maybe<Scalars['String']>;
  tcgplayer_infinite_articles?: Maybe<Scalars['String']>;
  tcgplayer_infinite_decks?: Maybe<Scalars['String']>;
};

export type GqlReleaseInfo = {
  __typename?: 'ReleaseInfo';
  description: Scalars['String'];
  name: Scalars['String'];
  version: Scalars['String'];
};

export type GqlSet = {
  __typename?: 'Set';
  block?: Maybe<Scalars['String']>;
  block_code?: Maybe<Scalars['String']>;
  card_count: Scalars['Int'];
  code: Scalars['String'];
  digital: Scalars['Boolean'];
  foil_only: Scalars['Boolean'];
  icon_svg_uri: Scalars['String'];
  id: Scalars['String'];
  mtgo_code?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nonfoil_only: Scalars['Boolean'];
  parent_set_code?: Maybe<Scalars['String']>;
  printed_size?: Maybe<Scalars['Int']>;
  released_at?: Maybe<Scalars['String']>;
  scryfall_uri: Scalars['String'];
  search_uri: Scalars['String'];
  set_type: Scalars['String'];
  tcgplayer_id?: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
};

export enum SetType {
  alchemy = 'alchemy',
  archenemy = 'archenemy',
  arsenal = 'arsenal',
  box = 'box',
  commander = 'commander',
  core = 'core',
  draft_innovation = 'draft_innovation',
  duel_deck = 'duel_deck',
  expansion = 'expansion',
  from_the_vault = 'from_the_vault',
  funny = 'funny',
  masterpiece = 'masterpiece',
  masters = 'masters',
  memorabilia = 'memorabilia',
  planechase = 'planechase',
  premium_deck = 'premium_deck',
  promo = 'promo',
  spellbook = 'spellbook',
  starter = 'starter',
  token = 'token',
  treasure_chest = 'treasure_chest',
  vanguard = 'vanguard'
}

export type GqlSets = GqlList & {
  __typename?: 'Sets';
  data: Array<GqlSet>;
  has_more: Scalars['Boolean'];
  next_page?: Maybe<Scalars['String']>;
  total_cards?: Maybe<Scalars['Int']>;
  warnings?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GqlSymbology = {
  __typename?: 'Symbology';
  data: Array<GqlCardSymbol>;
  has_more: Scalars['Boolean'];
  object: Scalars['String'];
};

export type GqlSymbologyParseManaType = {
  __typename?: 'SymbologyParseManaType';
  cmc: Scalars['Float'];
  colorless: Scalars['Boolean'];
  colors: Array<Maybe<Color>>;
  cost: Scalars['String'];
  monocolored: Scalars['Boolean'];
  multicolored: Scalars['Boolean'];
  object: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GqlResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Card: ResolverTypeWrapper<GqlCard>;
  CardFace: ResolverTypeWrapper<GqlCardFace>;
  CardSymbol: ResolverTypeWrapper<GqlCardSymbol>;
  Cards: ResolverTypeWrapper<GqlCards>;
  CatalogType: ResolverTypeWrapper<GqlCatalogType>;
  Color: Color;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ImageUris: ResolverTypeWrapper<GqlImageUris>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Legalities: ResolverTypeWrapper<GqlLegalities>;
  Legality: Legality;
  List: GqlResolversTypes['Cards'] | GqlResolversTypes['Sets'];
  Preview: ResolverTypeWrapper<GqlPreview>;
  Prices: ResolverTypeWrapper<GqlPrices>;
  PurchaseUris: ResolverTypeWrapper<GqlPurchaseUris>;
  Query: ResolverTypeWrapper<{}>;
  Rarity: Rarity;
  RelatedCard: ResolverTypeWrapper<GqlRelatedCard>;
  RelatedUris: ResolverTypeWrapper<GqlRelatedUris>;
  ReleaseInfo: ResolverTypeWrapper<GqlReleaseInfo>;
  Set: ResolverTypeWrapper<GqlSet>;
  SetType: SetType;
  Sets: ResolverTypeWrapper<GqlSets>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Symbology: ResolverTypeWrapper<GqlSymbology>;
  SymbologyParseManaType: ResolverTypeWrapper<GqlSymbologyParseManaType>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GqlResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Card: GqlCard;
  CardFace: GqlCardFace;
  CardSymbol: GqlCardSymbol;
  Cards: GqlCards;
  CatalogType: GqlCatalogType;
  Float: Scalars['Float'];
  ImageUris: GqlImageUris;
  Int: Scalars['Int'];
  Legalities: GqlLegalities;
  List: GqlResolversParentTypes['Cards'] | GqlResolversParentTypes['Sets'];
  Preview: GqlPreview;
  Prices: GqlPrices;
  PurchaseUris: GqlPurchaseUris;
  Query: {};
  RelatedCard: GqlRelatedCard;
  RelatedUris: GqlRelatedUris;
  ReleaseInfo: GqlReleaseInfo;
  Set: GqlSet;
  Sets: GqlSets;
  String: Scalars['String'];
  Symbology: GqlSymbology;
  SymbologyParseManaType: GqlSymbologyParseManaType;
};

export type GqlCardResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Card'] = GqlResolversParentTypes['Card']> = {
  all_parts?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['RelatedCard']>>>, ParentType, ContextType>;
  arena_id?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  artist?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  artist_ids?: Resolver<Array<Maybe<GqlResolversTypes['String']>>, ParentType, ContextType>;
  booster?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  border_color?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  card_back_id?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  card_faces?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['CardFace']>>>, ParentType, ContextType>;
  cardmarket_id?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  cmc?: Resolver<Maybe<GqlResolversTypes['Float']>, ParentType, ContextType>;
  collector_number?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  color_identity?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['Color']>>>, ParentType, ContextType>;
  color_indicator?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['Color']>>>, ParentType, ContextType>;
  colors?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['Color']>>>, ParentType, ContextType>;
  content_warning?: Resolver<Maybe<GqlResolversTypes['Boolean']>, ParentType, ContextType>;
  digital?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  edhrec_rank?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  finishes?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['String']>>>, ParentType, ContextType>;
  flavor_name?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  flavor_text?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  foil?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  frame?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  frame_effects?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['String']>>>, ParentType, ContextType>;
  full_art?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  games?: Resolver<Array<GqlResolversTypes['String']>, ParentType, ContextType>;
  hand_modifier?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  highres_image?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  illustration_id?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  image_status?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  image_uris?: Resolver<Maybe<GqlResolversTypes['ImageUris']>, ParentType, ContextType>;
  keywords?: Resolver<Array<Maybe<GqlResolversTypes['String']>>, ParentType, ContextType>;
  lang?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  layout?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  legalities?: Resolver<GqlResolversTypes['Legalities'], ParentType, ContextType>;
  life_modifier?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  loyalty?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  mana_cost?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  mtgo_foil_id?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  mtgo_id?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  multiverse_ids?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['Int']>>>, ParentType, ContextType>;
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  nonfoil?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  object?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  oracle_id?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  oracle_text?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  oversized?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  penny_rank?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  power?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  preview?: Resolver<Maybe<GqlResolversTypes['Preview']>, ParentType, ContextType>;
  prices?: Resolver<GqlResolversTypes['Prices'], ParentType, ContextType>;
  printed_name?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  printed_text?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  printed_type_line?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  prints_search_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  produced_mana?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['Color']>>>, ParentType, ContextType>;
  promo?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  promo_types?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['String']>>>, ParentType, ContextType>;
  purchase_uris?: Resolver<Maybe<GqlResolversTypes['PurchaseUris']>, ParentType, ContextType>;
  rarity?: Resolver<GqlResolversTypes['Rarity'], ParentType, ContextType>;
  related_uris?: Resolver<Maybe<GqlResolversTypes['RelatedUris']>, ParentType, ContextType>;
  released_at?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  reprint?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  reserved?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  rulings_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  scryfall_set_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  scryfall_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  security_stamp?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  set?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  set_id?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  set_name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  set_search_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  set_type?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  set_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  story_spotlight?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  tcgplayer_etched_id?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  tcgplayer_id?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  textless?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  toughness?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  type_line?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  variation?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  variation_of?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  watermark?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlCardFaceResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['CardFace'] = GqlResolversParentTypes['CardFace']> = {
  artist?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  cmc?: Resolver<Maybe<GqlResolversTypes['Float']>, ParentType, ContextType>;
  color_indicator?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['Color']>>>, ParentType, ContextType>;
  colors?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['Color']>>>, ParentType, ContextType>;
  flavor_text?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  illustration_id?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  image_uris?: Resolver<Maybe<GqlResolversTypes['ImageUris']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  loyalty?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  mana_cost?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  oracle_id?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  oracle_text?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  power?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  printed_name?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  printed_text?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  printed_type_line?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  toughness?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  type_line?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  watermark?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlCardSymbolResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['CardSymbol'] = GqlResolversParentTypes['CardSymbol']> = {
  appears_in_mana_costs?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  cmc?: Resolver<Maybe<GqlResolversTypes['Float']>, ParentType, ContextType>;
  colors?: Resolver<Array<Maybe<GqlResolversTypes['Color']>>, ParentType, ContextType>;
  english?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  funny?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  gatherer_alternates?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['String']>>>, ParentType, ContextType>;
  loose_variant?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  object?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  represents_mana?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  svg_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  transposable?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlCardsResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Cards'] = GqlResolversParentTypes['Cards']> = {
  data?: Resolver<Array<GqlResolversTypes['Card']>, ParentType, ContextType>;
  has_more?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  next_page?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  total_cards?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  warnings?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlCatalogTypeResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['CatalogType'] = GqlResolversParentTypes['CatalogType']> = {
  data?: Resolver<Array<GqlResolversTypes['String']>, ParentType, ContextType>;
  object?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  total_values?: Resolver<GqlResolversTypes['Int'], ParentType, ContextType>;
  uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlImageUrisResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['ImageUris'] = GqlResolversParentTypes['ImageUris']> = {
  art_crop?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  border_crop?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  large?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  normal?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  png?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  small?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlLegalitiesResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Legalities'] = GqlResolversParentTypes['Legalities']> = {
  alchemy?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  brawl?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  commander?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  duel?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  explorer?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  future?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  gladiator?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  historic?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  historicbrawl?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  legacy?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  modern?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  oldschool?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  pauper?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  paupercommander?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  penny?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  pioneer?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  premodern?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  standard?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  vintage?: Resolver<GqlResolversTypes['Legality'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlListResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['List'] = GqlResolversParentTypes['List']> = {
  __resolveType: TypeResolveFn<'Cards' | 'Sets', ParentType, ContextType>;
  has_more?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  next_page?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  total_cards?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  warnings?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['String']>>>, ParentType, ContextType>;
};

export type GqlPreviewResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Preview'] = GqlResolversParentTypes['Preview']> = {
  previewed_at?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  source_uri?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlPricesResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Prices'] = GqlResolversParentTypes['Prices']> = {
  eur?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  eur_foil?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  tix?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  usd?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  usd_etched?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  usd_foil?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlPurchaseUrisResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['PurchaseUris'] = GqlResolversParentTypes['PurchaseUris']> = {
  cardhoarder?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  cardmarket?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  tcgplayer?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlQueryResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Query'] = GqlResolversParentTypes['Query']> = {
  cardRandom?: Resolver<GqlResolversTypes['Card'], ParentType, ContextType>;
  cardSearch?: Resolver<GqlResolversTypes['Cards'], ParentType, ContextType, RequireFields<GqlQuerycardSearchArgs, 'q'>>;
  catalogArtistNames?: Resolver<GqlResolversTypes['CatalogType'], ParentType, ContextType>;
  catalogCardNames?: Resolver<GqlResolversTypes['CatalogType'], ParentType, ContextType>;
  catalogLandTypes?: Resolver<GqlResolversTypes['CatalogType'], ParentType, ContextType>;
  releaseInfo?: Resolver<GqlResolversTypes['ReleaseInfo'], ParentType, ContextType>;
  setByCode?: Resolver<GqlResolversTypes['Set'], ParentType, ContextType, RequireFields<GqlQuerysetByCodeArgs, 'code'>>;
  setById?: Resolver<GqlResolversTypes['Set'], ParentType, ContextType, RequireFields<GqlQuerysetByIdArgs, 'id'>>;
  sets?: Resolver<GqlResolversTypes['Sets'], ParentType, ContextType>;
  symbology?: Resolver<GqlResolversTypes['Symbology'], ParentType, ContextType>;
  symbologyParseMana?: Resolver<GqlResolversTypes['SymbologyParseManaType'], ParentType, ContextType, RequireFields<GqlQuerysymbologyParseManaArgs, 'cost'>>;
};

export type GqlRelatedCardResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['RelatedCard'] = GqlResolversParentTypes['RelatedCard']> = {
  component?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  type_line?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlRelatedUrisResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['RelatedUris'] = GqlResolversParentTypes['RelatedUris']> = {
  edhrec?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  gatherer?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  tcgplayer_infinite_articles?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  tcgplayer_infinite_decks?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlReleaseInfoResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['ReleaseInfo'] = GqlResolversParentTypes['ReleaseInfo']> = {
  description?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlSetResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Set'] = GqlResolversParentTypes['Set']> = {
  block?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  block_code?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  card_count?: Resolver<GqlResolversTypes['Int'], ParentType, ContextType>;
  code?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  digital?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  foil_only?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  icon_svg_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  mtgo_code?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  nonfoil_only?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  parent_set_code?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  printed_size?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  released_at?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  scryfall_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  search_uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  set_type?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  tcgplayer_id?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  uri?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlSetsResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Sets'] = GqlResolversParentTypes['Sets']> = {
  data?: Resolver<Array<GqlResolversTypes['Set']>, ParentType, ContextType>;
  has_more?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  next_page?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  total_cards?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  warnings?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlSymbologyResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Symbology'] = GqlResolversParentTypes['Symbology']> = {
  data?: Resolver<Array<GqlResolversTypes['CardSymbol']>, ParentType, ContextType>;
  has_more?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  object?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlSymbologyParseManaTypeResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['SymbologyParseManaType'] = GqlResolversParentTypes['SymbologyParseManaType']> = {
  cmc?: Resolver<GqlResolversTypes['Float'], ParentType, ContextType>;
  colorless?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  colors?: Resolver<Array<Maybe<GqlResolversTypes['Color']>>, ParentType, ContextType>;
  cost?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  monocolored?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  multicolored?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  object?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlResolvers<ContextType = any> = {
  Card?: GqlCardResolvers<ContextType>;
  CardFace?: GqlCardFaceResolvers<ContextType>;
  CardSymbol?: GqlCardSymbolResolvers<ContextType>;
  Cards?: GqlCardsResolvers<ContextType>;
  CatalogType?: GqlCatalogTypeResolvers<ContextType>;
  ImageUris?: GqlImageUrisResolvers<ContextType>;
  Legalities?: GqlLegalitiesResolvers<ContextType>;
  List?: GqlListResolvers<ContextType>;
  Preview?: GqlPreviewResolvers<ContextType>;
  Prices?: GqlPricesResolvers<ContextType>;
  PurchaseUris?: GqlPurchaseUrisResolvers<ContextType>;
  Query?: GqlQueryResolvers<ContextType>;
  RelatedCard?: GqlRelatedCardResolvers<ContextType>;
  RelatedUris?: GqlRelatedUrisResolvers<ContextType>;
  ReleaseInfo?: GqlReleaseInfoResolvers<ContextType>;
  Set?: GqlSetResolvers<ContextType>;
  Sets?: GqlSetsResolvers<ContextType>;
  Symbology?: GqlSymbologyResolvers<ContextType>;
  SymbologyParseManaType?: GqlSymbologyParseManaTypeResolvers<ContextType>;
};

