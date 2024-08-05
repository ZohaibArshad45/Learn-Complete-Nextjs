'use client'
import { useEffect, useState } from "react"

async function getData() {
    let Data = await fetch('https://jsonplaceholder.typicode.com/albums')
    let newdata = await Data.json()
    return newdata
}

const clientSide = () => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        const fetchdata = async ()=>{
            let fetchdataUser = await getData()
            setposts(fetchdataUser)

            //// asy edr hi function bana sakhty ha, but hum upper bany gy
            // let Data = await fetch('https://jsonplaceholder.typicode.com/albums')
            // let newdata = await Data.json()
            // setposts(newdata)

        }
        fetchdata() 
    }, [])


    return (
        <>
            <h1 className="flex flex-col  items-center m-10 text-yellow-500">Client Side Fetch Data | API</h1>
            {
                posts.map((post) =>
                    <li key={post.id}>{post.title}</li>
                )
            }
        </>
    )
}

export default clientSide
