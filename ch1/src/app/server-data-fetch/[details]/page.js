import React from 'react'

async function fetchUserDetails(currentUserID) {
    try {
        const detailsRes = await fetch(` https://dummyjson.com/users/${currentUserID}`)
        const result = await detailsRes.json()
        return result

    } catch (error) {
        throw new error(error)
    }
}


const detailPage = async ({ params }) => {
    // console.log(params)
    const userDetail = await fetchUserDetails(params.details)

    return (
        <div>
            <h1>This is Details Page</h1>
            <p>{userDetail?.firstName}</p>
            <p>{userDetail?.lastName}</p>
            <p>{userDetail?.age}</p>
            <p>{userDetail?.email}</p>
            <p>{userDetail?.phone}</p>
        </div>
    )
}

export default detailPage
