import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <div className='bg-black/90 flex md:flex-row flex-col items-center justify-between p-20 gap-10 text-white rounded-xl'>
        <div className=' '>
            <Image 
                src='/img1.jpg'
                width={900}
                height={500}
                alt=''
                className='bg-center bg-cover rounded-xl '
            />
        </div>
        <div className='flex flex-col lg:gap-10 gap-5'>
            <h2 className='lg:text-5xl text-4xl font-bold'>
            New Phantom,<br/>
                <span className='font-normal lg:text-4xl text-3xl '>
                    now refurbished.
                </span> 
            </h2>
            <p className='lg:text-lg text-sm'>
            Devialet Phantom in matte finish is now available refurbished. Every speaker comes with a new box, power cable, and Devialet Remote, together with a new 24-month warranty. A unique opportunity to get your hands on the implosive sound at a preferential rate.
            </p>
        </div>
    </div>
  )
}

export default Intro