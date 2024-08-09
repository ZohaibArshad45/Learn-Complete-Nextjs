'use client'
import React, { useState } from 'react'

const registionPage = () => {
    const [name, setname] = useState("");
    const [age, setage] = useState("");

    async function registerUser  () {
        // console.log(name, age)
        let data = await fetch('http://localhost:3000/api/learn-post-method', {method: "Post", body: JSON.stringify({name,age})})
        let newdata = await data.json()
        console.log(data)

    }

    return (
        <main className='flex flex-col justify-center items-center mt-40'>

            <h2>Register Page</h2>
            
            <input type="text" value={name} className='border-2 rounded-lg p-1 m-1 border-white ' placeholder='Enter your Name'  onChange={(e) => setname(e.target.value)} />
            <input type="text" value={age} className='border-2 rounded-lg p-1 m-1 border-white ' placeholder='Enter your Age'  onChange={(e) => setage(e.target.value)} />
            <button onClick={registerUser}>Register</button>

        </main>
    )
}

export default registionPage
