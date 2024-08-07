// these two not good Practice, 
// for good we redirect in folder(next-config.mjs) ==> Check it

'use client'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

const LearnRedirection = () => {
    // // simple redirect -------------------
    // redirect('/login')


    // Conditional redirect --------------------
    // let login = true
    const [login, setlogin] = useState(true);
    if(login === false){
        redirect('/login');
    }

    let handleLogout = ()=>{
        setlogin(false)
    }
    
    
  return (
    <>
    <h1>Here we Learn About Redirection</h1>
    <p> First Import redirect from next/navigation</p>
    <button className=' bg-red-600 p-1 rounded-lg' onClick={handleLogout}>Logout</button>
      
    </>
  )
}

export default LearnRedirection
