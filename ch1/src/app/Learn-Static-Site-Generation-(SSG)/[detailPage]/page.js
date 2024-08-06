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
    <h1>Name : {userID.name}</h1>
    <h1>Email : {userID.email}</h1>
    <h1>Address: {userID.address.suite}</h1>
    <h1>ID : {userID.id}</h1>
    <h1>ZipCode : {userID.address.zipcode}</h1>
    <h1>GEO Lat : {userID.address.geo.lat}</h1>
    <h1>GEO Lng : {userID.address.geo.lng}</h1>
      
    </>
  )
}

export default StaticDetails
