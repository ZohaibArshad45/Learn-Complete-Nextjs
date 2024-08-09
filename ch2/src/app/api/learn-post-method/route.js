// // we can't see this out on google,
// // postman can show us output

// import { NextResponse } from "next/server"
// export const POST = ()=>{
//     return NextResponse.json({name : 'Zohaib', age:22})
// }



//// -------------------------------------------
// // if we want to send data from postman to here,
// // open postman == new request ==> body => raw  => fil data {}

// import { NextResponse } from "next/server"

// export const POST = async (req, res)=>{
//     let data = await req.json();
//     console.log(data)
////     return NextResponse.json({name : 'Zohaib', age:22})
//     return NextResponse.json("Done")
// }



import { NextResponse } from "next/server"

export const POST = async (req, res)=>{
    let data = await req.json();
    console.log(data)
    // first we make in postman then we check,
    // in this case we make id and name in postman
    // we want to check found or not
    if(!data.name || !data.age){
        return NextResponse.json({Result : ' Not found'}, {status: 400})
    }
    return NextResponse.json({Result : 'found'}, {status: 200})
}