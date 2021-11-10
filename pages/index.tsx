import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client';

const Home: NextPage = () => {
  const GET_REPO_INFORMATION = gql`
  query {
    repository(owner:"rarescosmin", name:"mirage-github-ui") {
      issues(last:20, states:CLOSED) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  `
  const { loading, error, data } = useQuery(GET_REPO_INFORMATION);
  
  const fetchGithubRepositoryInformation = () => {
    console.log(data);
  }

  return (
    <div className="grid place-items-center min-h-screen bg-gray-400">
      <h1 className="text-lg font-extrabold">Welcome to Mirage Github UI</h1>
      <button className="cursor-pointer rounded-md bg-gray-500" onClick={fetchGithubRepositoryInformation}>
        Fetch from GitHub
      </button>
    </div>
  )
}

export default Home
