import { gql, useQuery } from '@apollo/client';

const GET_REPO_INFORMATION = gql`
query {
    repositoryOwner (login: "facebook") {
      repositories {
        totalCount
      }
    }
}
`

const fetchGithubRepositoryInformation = () => {
    const { loading, error, data } = useQuery(GET_REPO_INFORMATION);
    console.log(data);
    return data
}

export default fetchGithubRepositoryInformation