import { employee } from "@/app/static-db/db"
import { NextResponse } from "next/server"

export const GET = (req , values)=>{
    // console.log(values.params.dynamicGETDB)
    // const employeeData = employee
    const empData = employee.filter((items) => items.id == values.params.dynamicGETDB)

    let result = empData.length == 0 ?  'Not Found Employee' : empData
    return NextResponse.json(result)
}