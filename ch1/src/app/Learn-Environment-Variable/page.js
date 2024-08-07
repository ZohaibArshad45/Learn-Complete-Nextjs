// it is use if you dont show your thing to other, For Example Google API Key
import React from 'react'

const EnvironmentVariable = () => {
  console.log(process.env) // console me show krwa dy ga, vs code ky console ma
  // aur ya imp bt ha , console sirf developer build ma show hota ha,
  // production build me nh, (Mean jb hum npm run build bana laty hain)
  return (
    <>
      <h1>Learn Enviroment Variable:</h1>
      {
        process.env.NODE_ENV == 'development' ? <h3>Developer mode</h3> : <h3>Production build</h3>
        // NODE_ENV console sy check kry ga, phr os hisb sy output dy ga
      }

      {/* for your custom Environment Variable, we create file on route path
       file name is .env.local*/}
      <h1>{process.env.GOOGLEMAPPASSKEY}</h1>
      {/* ya GOOGLEMAPPASSKEY name ha environement ka, file (.env.local) ky andr, */}



    </>
  )
}

export default EnvironmentVariable
