'use client'
import Script from 'next/script'

import React from 'react'

const ScriptComponent = () => {
  return (
    <main className='flex flex-col items-center mt-20 justify-center'>
      <h1> Learn Script Components</h1>
      <p> This is use for extra library / package </p>
      <p> custom script code.</p>
      <p>Show in console | For this we need to make file in public folder </p>

      {/* make file in public folder */}
      <Script src='/ForScriptComponent.js'/>

       {/* we can also use onload function */}
      <Script src='/ForScriptComponent.js' onLoad={() => { console.log('kia hall ha') }} />

    </main>
  )
}

export default ScriptComponent
