import DeleteBTN from '@/components/DeleteBtn/page'
import React from 'react'

let dataFromAPI = async () => {
  let data = await fetch('http://localhost:3000/api/learn-GET-method')
  data = await data.json()
  return data
}

const page = async () => {
  let datain = await dataFromAPI()
  return (
    <>
      <h1>Show and Delete Data</h1>
      { 
        datain.map((item, i) =>(
          <>
          <h1 key={i}>{item.name}</h1>
          <DeleteBTN itemID={item.myid}/>
          </>
        ))
      }


    </>
  )
}

export default page
