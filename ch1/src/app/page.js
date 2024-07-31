'use client'
import { useRouter } from "next/navigation";
import React from 'react'

const page = () => {

  const router = useRouter();
  
  function severSide() {
    router.push('Learn-server-side-data-fetching')
  }
  function LearnMetaData(){
    router.push('LearnMetaData')
  }

  return (
    <>
      <h1 className='flex justify-center mt-20'>Wellcome Zohaib Arshad</h1>
      <div className="btn flex justify-center flex-col mt-5">
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('Learn-client-side-data-fetching')}>Client side Data Fetch</button>
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('Learn-client-side-f-d-another-way')}>Client side Data Fetch by another way</button>
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={severSide}>Server side Data Fetch</button>
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('Learn-server-side-f-d-another-way')}>Server side Data Fetch by another way</button>
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('LearnModuleCSS')}>Learn Module CSS</button>
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('LearnImage')}>Learn IMAGE</button>
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={()=> router.push('LearnFontSet')}> Learn Font </button>
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={LearnMetaData}> Learn MetaData </button>
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('LearnScriptComponents')}> Learn Script Components </button>
        <button className='mt-3 p-2 bg-slate-800 w-96 m-auto border rounded-lg border-gray-50 hover:bg-red-400' onClick={() => router.push('LearnLoadingAPI')}> Learn Loading API </button>

      </div>


    </>
  )
}

export default page
