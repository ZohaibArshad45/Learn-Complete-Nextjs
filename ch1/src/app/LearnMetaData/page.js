import React from 'react'

const LearnMetaData = () => {
  return (
    <>
    {/* this is not correct way it show two title in console [Elements] */}
    {/* <title>New title </title>  */}



    <h1>Learn | Metadata</h1>
      
    </>
  )
}

export default LearnMetaData


// function generateMetadata likhna lazami ha warna work nh kry ga
export function generateMetadata(){
    return{
        title : 'new title',
        description : 'this is my new description'
    }
}
