import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function getRepos() {
    const response = await fetch("https://api.github.com/users/tonykieling/repos", {next: { revalidate: 60}});
    const repos = await response.json();
    // const repos = [{name: "nameABC", description: "desc", stargazers_count: 1, forks_count: 2, watchers_count: 3}];
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    await new Promise(resolve => setTimeout(resolve , 2000));
    return repos;
}


const ReposPage = async () => {
    const repos = await getRepos();

    return (
        <div className="repos-container">
            <h2>Repos</h2>

            <ul className="repo-list">
                { repos.map(repo => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div className="repo-details">
                                <span><FaStar />{repo.stargazers_count}</span>
                                <span><FaCodeBranch />{repo.forks_count}</span>
                                <span><FaEye />{repo.watchers_count}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            <p>{repos.length}</p>
        </div>
    );
}

export default ReposPage