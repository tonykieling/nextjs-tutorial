import { NextResponse } from "next/server";

//  http://localhost:3000/api/search?name=tk&age=44

export async function GET(request) {
    // console.log("--- ", request.url, "---")
    const { searchParams } = new URL(request.url);
    // console.log("searchParams::: ", searchParams);
    const output = searchParams.get("website");

    return NextResponse.json({message: output});
}

