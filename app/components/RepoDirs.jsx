import Link from "next/link";

const fetchRepoContents = async name => {
    await new Promise(res => setTimeout(res, 3000));

    const response = await fetch(`https://api.github.com/repos/tonykieling/${name}/contents`);
    const result = response.json();
    return result;
}

const RepoDirs = async ({ name }) => {
    const content = await fetchRepoContents(name);
    const dirs = content.filter(item => item.type === "dir");

    return (
        <>
            <h3>Directories</h3>
            <ul>
                { dirs.map(dir => 
                        <li key={dir.path}>
                            <Link href={`/code/repos/${name}/${dir.path}`}> {dir.path} </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default RepoDirs