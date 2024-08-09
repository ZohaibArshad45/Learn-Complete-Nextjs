'use client'
import React from 'react'

const DeleteBTN = (props) => {
    // console.log(props.itemID)
    const deleteEmployee = async()=>{
        let data = await fetch(`http://localhost:3000/api/learn-GET-method/${props.itemID}`)
        data = await data.json()

    }



  return (
    <>
    <button className='' onClick={deleteEmployee}>Delete</button>
      
    </>
  )
}

export default DeleteBTN
