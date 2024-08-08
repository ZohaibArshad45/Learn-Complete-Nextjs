// // This is simple
// export async function GET(request) {
//     return new Response('Hello API Route')
// }




// 1 => we need to import NextResponse from 'next/server'
import { NextResponse } from "next/server"

export const GET = (request) => {
    return NextResponse.json({ 
        name: 'Zohaib', 
        Username: 'Zohaib45', 
        RollNumber: 'S21BSEEN1M01063', 
        Number: 1045,
        Department : 'Software Engineering'
     })
}