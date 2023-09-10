import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

const Landing = () => {
  return (
    <div className='bg-red-800 h-[90vh]  custom-bg bg-fixed bg-cover flex justify-start items-center '>
        <div className=' flex flex-col items-start justify-center'>
            <div className='p-10 md:p-20  flex flex-col gap-3'>
                <h2 
                    className='text-gray-100   text-3xl font-normal'
                >
                    Phantom I
                </h2>
                <h1 
                    className='text-5xl text-white font-semibold'
                >
                    Implosive sound 
                </h1>
                <p 
                    className='text-white font-normal py-4'
                >
                    Headphone that make you forget <br/>
                    everything around Disconnect <br/>
                    from the around world
                </p>
                <Link 
                    href='/' 
                    className='bg-white px-5 py-3 rounded-xl font-semibold w-fit  custom-hover'
                >
                    Shop Product
                    </Link>
            </div>

        </div>
    </div>
  )
}

export default Landing