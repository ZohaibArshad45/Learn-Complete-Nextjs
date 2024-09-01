import { NextResponse } from "next/server"


export const POST = ()=>{
    return NextResponse.json({name : 'Zohaib', age : 23,  clg : "IUB"})

}
// this result show in postman ,