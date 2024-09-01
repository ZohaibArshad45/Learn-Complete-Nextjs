'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
 let router = useRouter()

  function hndle1 (){
    router.push('api/learn-GET-API-with-static-data')

  } 


  return (
    <div className="flex flex-col items-center justify-center w-full bg-red-500 text-white min-h-screen gap-1">
      <h1 >Well Come Zohaib</h1>
      <Link className=" border-2 p-2 bg-red-950 rounded-lg hover:bg-yellow-700"  href={"/api/first"}>Frist API Server Side</Link> 
      <button className=" border-2 p-2 bg-red-950 rounded-lg hover:bg-yellow-700" onClick={hndle1}>learn-GET-API-with-static-data</button>
      <button className=" border-2 p-2 bg-red-950 rounded-lg hover:bg-yellow-700" onClick={()=> router.push('api/learn-GET-API-with-static-data/2')}>learn-GET-API-with-static-data-on dyanmic route</button>
      <button className=" border-2 p-2 bg-red-950 rounded-lg hover:bg-yellow-700" onClick={()=> router.push('api/learn-POST-API-with-static-data')}>learn-POST-API-with-static-data (Data show in Postman)</button>
    </div>
  );
}
