import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DiveInto = () => {
  return (
    <div className='md:p-10 '>
        <h1 className='text-4xl font-semibold p-10'>
            Dive into our listening experiences
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 p-10'>
            <div className='flex flex-col bg-black text-white '>
                <p className='text-4xl font-bold md:p-20 p-5'>
                    Our Soundbar
                </p>
                <Image
                    src='/prod4.jpg'
                    width={650}
                    height={400}
                    alt=''
                    className='object-cover'
                />
                <Link href='/' className='text-xl flex justify-end py-10 px-20 font-bold'>
                    DISCOVER +
                </Link>
            </div>
            <div className='flex flex-col  bg-black text-white  '>
                <p className='text-4xl font-bold md:p-20 p-5'>
                    Our Speakers
                </p>
                <Image
                    src='/prod3.jpg'
                    width={650}
                    height={500}
                    alt=''
                    className='object-cover'
                />
                <Link href='/' className='text-xl flex justify-end py-10 px-20 font-bold'>
                    DISCOVER +
                </Link>
            </div>
        </div>

    </div>
  )
}

export default DiveInto