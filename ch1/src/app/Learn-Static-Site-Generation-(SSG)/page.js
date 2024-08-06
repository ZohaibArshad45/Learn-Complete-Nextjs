import React from 'react'
import getDataAPI from '../../../services/page'
import Link from 'next/link'

const StaticSiteGeneration = async () => {
  const data = await getDataAPI()

  return (
    <>
      <h1>Learn Static Site Generation (SSG) API</h1>


      {/* {
      data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))
    } */}


      {
        data.map((user, i) => (
          <h1 key={i}>
            <Link href={`Learn-Static-Site-Generation-(SSG)/${user.id}`} >{user.username}</Link>
          </h1>
        ))
      }


    </>
  )
}

export default StaticSiteGeneration
