// import { NextResponse } from "next/server";

// export function middleware(Request) {
//     // console.log('Check');
//     const islogin = true // false

//     if (!islogin && Request.nextUrl.pathname != '/login') {
//         return NextResponse.redirect(new URL('/login', Request.url))

//     }
// }


// =========================================================
// for specific page
import { NextResponse } from "next/server";

export function middleware(Request) {
    return NextResponse.redirect(new URL('/login', Request.url))
}

export const config ={
    matcher: ['/pay/:path*']
}