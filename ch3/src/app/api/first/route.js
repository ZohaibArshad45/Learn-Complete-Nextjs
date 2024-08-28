// export async function GET(req) {
//     return new Response('Hello Zohaib hhh')
// }

import { NextResponse } from "next/server";

export const GET = (req) => {
    return NextResponse.json({ name: "ZOhaib", 
        age: 23, 
        clg: "IUB" });
}
