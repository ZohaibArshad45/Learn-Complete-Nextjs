'use client'
import { useEffect, useState } from "react"

const clientSide = () => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        async function getData() {
            const Data = await fetch('https://jsonplaceholder.typicode.com/albums')
            setposts(await Data.json())
        }
        getData()

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
