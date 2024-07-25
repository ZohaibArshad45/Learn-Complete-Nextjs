import React from 'react'
import Button from './button'

async function getdata() {
    const myData = await fetch('https://jsonplaceholder.typicode.com/albums')
    const res = await myData.json()
    return res
}

const serverSide = async () => {
    const myres = await getdata()
    return (
        <>
        
        
            <h1 className="flex flex-col  items-center m-10 text-yellow-500"> Data Fetching By Sever Side | API</h1>
            {
                myres.map((e) =>
                    <>
                        <li key={e.id}>{e.title}</li>
                        <Button data = {e.id} />
                        <hr />
                        
                        

                        
                    

                    </>
                )
            }



        </>
    )
}

export default serverSide







