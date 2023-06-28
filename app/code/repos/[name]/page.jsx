import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
    // console.log("== name on REPOOOOOOOOOOOO: ", name);
    return (
        <div className='card'>
            <Link href="/code/repos" className="btn btn-back">Back to Repositories</Link>
            <Suspense fallback={<div>Loading.................</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading222222.................</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage