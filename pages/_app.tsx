import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client"
import githubApolloClient from '../services/apollo-clients/githubApolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={ githubApolloClient }>
      <Component { ...pageProps } />
    </ApolloProvider>
  )
}

export default MyApp
