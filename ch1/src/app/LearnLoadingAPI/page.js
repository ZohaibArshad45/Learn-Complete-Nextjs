'use client'

import { useEffect, useState } from "react"
import Loader from "./loader"

async function myList() {
  let data = await fetch('https://jsonplaceholder.typicode.com/albums')
  let newdata = data.json()
  return newdata
}


const LoadingAPI = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    let getData = async () => {
      let newgetdata = await myList()
      setusers(newgetdata)
      setloading(false)
    }
    getData()
  },[])

  return (
    <main className='flex flex-col justify-center items-center mt-20'>
      <h1> Learn Loading API</h1>
      <h2>This is most Important topic</h2>
      {
        loading ? <Loader/> :( users.map((user)=><li key={user.id}>{user.title}</li>))
      }

    </main>
  )
}

export default LoadingAPI
