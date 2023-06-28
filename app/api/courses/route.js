// import courses from "./data.json";
// import { NextResponse } from "next/server";

// export async function GET(request) {
//     // return new NextResponse(JSON.stringify(courses));
//     return NextResponse.json(courses);
// }



import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch("https://api.github.com/users/tonykieling/repos", {next: { revalidate: 60}});
    const repos = await response.json();
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    return NextResponse.json(repos);
}

