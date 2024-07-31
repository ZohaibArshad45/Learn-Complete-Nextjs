import Link from 'next/link'
import React from 'react'

// fetch
// make async

async function fetchData() {

  //  // we can also get by this but best way to do in try and catch
  //  const res = await fetch('https://dummyjson.com/users')
  //  const result = await res.json()
  //  return result.users

  try {
    const res = await fetch('https://dummyjson.com/users')
    const result = await res.json()
    return result.users

  }
  catch (error) {
    throw new Error(error)
  }
}

const serverDataFetch = async () => {

  const listUser = await fetchData()
  // console.log(listUser);


  return (
    <div>
      <h1 className='text-amber-500 ml-20 mt-10 mb-5'>Server Data Fetch</h1>
      <div className='ml-20'>
        {listUser && listUser.length > 0 ?
          listUser.map((a) => <li className='mb-3 cursor-pointer'>
            <Link href={`/Learn-server-side-f-d-another-way/${a.id}`}>{a.firstName}</Link>
          </li>)
          :
          null}
      </div>



    </div>
  )
}

export default serverDataFetch
