# graphql-scryfall
NodeJS/Express GraphQL server to connect with scryfall.com api

### To build the docker image
- `npm run build`
- `docker build . -t graphql-scryfall`
- `docker images` to obtain the latest IMAGE_ID
- `docker tag <IMAGE_ID> ghcr.io/stefanschenk/graphql-scryfall:<package version>`
- `docker push ghcr.io/stefanschenk/graphql-scryfall:<package version>`
