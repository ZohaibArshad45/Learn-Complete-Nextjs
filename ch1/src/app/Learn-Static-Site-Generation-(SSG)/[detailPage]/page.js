import React from 'react'
import getDataAPI from '../../../../services/page'

const StaticDetails = async (props) => {
  const data =  await getDataAPI()
  // console.log(props.params.detailPage)
  const usercheck  = props.params.detailPage
  const userID  = data[usercheck - 1] 

  return (
    <>
    <h1>Static User Info : </h1>
    <h1>{userID.id}</h1>
    <h1>{userID.name}</h1>
      
    </>
  )
}

export default StaticDetails
