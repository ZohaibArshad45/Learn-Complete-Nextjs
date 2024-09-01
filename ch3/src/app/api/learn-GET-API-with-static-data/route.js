import { employee } from "@/app/static-db/db"
import { NextResponse } from "next/server"

export const GET = ()=>{
    const employeeData = employee // employee  = @/app/static-db/db
    return NextResponse.json(employeeData)

}