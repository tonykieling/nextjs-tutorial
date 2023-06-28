import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepo = async name => {
    // console.log("name??? ", name);
    const answer = await fetch(`https://api.github.com/repos/tonykieling/${name}`);
    const repo = await answer.json();
    return repo;
}

const Repo = async ({ name }) => {
    // console.log("name: ", name);
    const repo = await fetchRepo(name);
    // console.log("repo--- ", repo.description);
    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className="card-stats">
                <div className="card-stat">
                    <FaStar />
                    <span>{repo.stargazer_count}</span>
                </div>
                <div className="card-stat">
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                <div className="card-stat">
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    )
}

export default Repo