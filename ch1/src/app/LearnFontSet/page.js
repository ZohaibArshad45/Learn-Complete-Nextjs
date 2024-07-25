import { Poppins } from "next/font/google"
import { Roboto } from "next/font/google"

const poppins = Poppins({
    weight : '700',
    subsets : ['latin'],
    display : 'swap'
})
const roboto = Roboto({
    weight : '700',
    subsets : ['latin'],
    display : 'swap'
})

const LearnFontSet = () => {
  return (
    <>
    <h1> Learn | How we set Fonts</h1>
    <h1 className={poppins.className}> Learn | How we set Fonts</h1>
    <h1 className={roboto.className}> Learn | How we set Fonts</h1>
      
    </>
  )
}

export default LearnFontSet
