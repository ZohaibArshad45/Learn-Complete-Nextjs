// 1) make folder insrc 

import { employeeData } from "@/db/employedb"
import { NextResponse } from "next/server"

export const GET = ()=>{
    const data = employeeData // folder db, employeedb, osky andr ha employeeData
    // return NextResponse.json(data)
    return NextResponse.json(data,{status: 200})

}