'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  let router = useRouter()

  function firstAPI() {
    router.push('/api/first')
  }
  return (
    <main className=" flex flex-col justify-center items-center mt-10">
      <h1>WellCome Zohiab, This is <span className="text-red-800 font-bold mb-5">Home Page</span> </h1>
      <button className="bg-pink-700 p-1 pl-4 pr-4 rounded-lg mt-2 hover:bg-yellow-500" onClick={firstAPI}>What is API, About API</button>

    </main>
  );
}
