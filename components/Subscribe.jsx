import Link from 'next/link'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='py-40 xl:px-80 lg:px-20 px-10 custom-bg bg-center relative z-20'>
    <div className='w-full h-full top-0 left-0  bg-black/60 backdrop-brightness-75 absolute z-0 ' />
            <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-10 justify-center py-10 z-20 '>
                <div className='z-20 text-white'>
                    <h1 className='text-2xl font-semibold'>
                    JOIN THE REVOLUTION
                    </h1>
                    <p className='lg:text-lg text-sm '>
                    Sign up for live updates on Devialet.
        All over the world.
                    </p>
                </div>
                <div className='z-20'>
                    <input 
                        type="text" 
                        placeholder='Email' 
                        className='border-none p-3 focus:outline-none '
                    />
                    <button className='p-3 bg-black text-white  '>SUBSCRIBE</button>
                </div>
            </div>
            <div className='z-50 flex justify-center items-center'>
                <p className='text-white text-sm md:flex md:justify-center z-50 '>
                Devialet will only use the information provided by you for the limited purposes identified in our 
                <Link href='/' className='font-bold px-1 underline hover-link z-20'>Privacy Policy</Link>
                </p>

            </div>
            

</div>
  )
}

export default Subscribe