'use client'
const Button = (props) => {
  return (
    <>
    <button onClick={()=> alert(props.data)} className='text-red-600 border-4 border-red-500 bg-yellow-400 '>Click Me</button>
      
    </>
  )
}

export default Button
