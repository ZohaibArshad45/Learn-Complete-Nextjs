'use client'
import { useRouter } from "next/navigation";
import React from 'react'

const page = () => {

  const router = useRouter();
  
  function severSide() {
    router.push('server-side-data-fetching')
  }
  function LearnMetaData(){
    router.push('LearnMetaData')
  }

  return (
    <>
      <h1 className='flex justify-center mt-20'>Wellcome Zohaib Arshad</h1>
      <div className="btn flex justify-center flex-col mt-5">
        <button className='p-2 bg-slate-800 w-60 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('client-side-data-fetching')}>Client side Data Fetch</button>
        <button className='mt-3 p-2 bg-slate-800 w-60 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={severSide}>Server side Data Fetch</button>
        <button className='mt-3 p-2 bg-slate-800 w-60 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('LearnModuleCSS')}>Learn Module CSS</button>
        <button className='mt-3 p-2 bg-slate-800 w-60 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('LearnImage')}>Learn IMAGE</button>
        <button className='mt-3 p-2 bg-slate-800 w-60 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={()=> router.push('LearnFontSet')}> Learn Font </button>
        <button className='mt-3 p-2 bg-slate-800 w-60 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={LearnMetaData}> Learn MetaData </button>
        <button className='mt-3 p-2 bg-slate-800 w-60 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('LearnScriptComponents')}> Learn MScript Components </button>
      </div>


    </>
  )
}

export default page
