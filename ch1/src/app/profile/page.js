import { redirect } from 'next/navigation'
import React from 'react'

const profile = () => {

    // assume on not login
    const loginpage = null
    if (loginpage === null) redirect('login')

  return (
    <div>
      <h1>Profile page</h1>
    </div>
  )
}

export default profile
