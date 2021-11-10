import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = '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';
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
});

const githubApolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

export default githubApolloClient;