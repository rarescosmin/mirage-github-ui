import GithubRepositoryProps from "./GithubRepositoryProps";

const GithubRepository = (props: GithubRepositoryProps) => {
  return (
    <div>
      { props.githubRepoTitle }
    </div>
  );
}

export default GithubRepository
