import { employeeData } from "@/db/employedb"
import { NextResponse } from "next/server"

export const GET = (req, value)=>{
    // console.log(value.params.dynamicRoute)
    const urlData = value.params.dynamicRoute

    // const data = employeeData
    // return NextResponse.json(data)

    // const mydata = employeeData.filter((e)=> e.myid == value.params.dynamicRoute) // e.myid come from Src=>db=>emloyeedb
    const mydata = employeeData.filter((e)=> e.myid == urlData) // e.myid come from Src=>db=>emloyeedb
    // let result = mydata.length == 0 ? 'Not Found' : mydata
    let result = mydata.length == 0 ? { result :'Not Found'} : {result: mydata}
    return NextResponse.json(result)
}


// // ========================== Delete ======================
// // check in postman
export const DELETE = (req, value) =>{
    let emloyeeeID = value.params.dynamicRoute
    if(emloyeeeID){
        return NextResponse.json({Result : 'Employee Info Delete Successfully', success: true}, {status:200})
    }
    else{
        return NextResponse.json({Result : 'Employee not Found', success: true}, {status:404})
    }
}