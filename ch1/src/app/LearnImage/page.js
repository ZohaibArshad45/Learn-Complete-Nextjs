import React from 'react'
import Image from 'next/image'
import imgNext from '../../../public/next.svg'

const imagePage = () => {
    return (
        <main className='flex flex-col justify-center items-center'>
            <h1> Learn About IMAGE</h1>
            <div className='flex flex-wrap'>
                <Image className='bg-white p-10' src={imgNext} />
                <Image src='https://images.pexels.com/photos/26997896/pexels-photo-26997896/free-photo-of-woman-in-t-shirt-and-skirt-walking-by-field-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load ' width={600} height={300} />
                <Image src='https://images.pexels.com/photos/17247893/pexels-photo-17247893/free-photo-of-white-blooming-flowers-on-cherry-tree-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={500} height={300} />
                <Image src='https://images.pexels.com/photos/16876973/pexels-photo-16876973/free-photo-of-young-woman-sitting-by-the-water-with-a-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={500} height={300} />
                <Image src='https://images.pexels.com/photos/21430842/pexels-photo-21430842/free-photo-of-woman-posing-on-a-banister.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load ' width={600} height={300} />
                <Image src='https://images.pexels.com/photos/21430948/pexels-photo-21430948/free-photo-of-a-man-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load ' width={500} height={300} />
            </div>
        </main>
    )
}

export default imagePage
