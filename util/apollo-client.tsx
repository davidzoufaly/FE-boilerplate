
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';
import fetch from 'isomorphic-unfetch';

const GRAPHQL_URL = '';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: GRAPHQL_URL,
      fetch,
      cache: new InMemoryCache()
      .restore(initialState || {})
    })
);