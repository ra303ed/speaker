import Link from 'next/link'
import React from 'react'

const DevialetFor = () => {
  return (
    <div className='bg-black text-white flex flex-col gap-10 justify-center items-center md:p-32 p-10'>
        <h1 className='text-3xl md:text-5xl flex justify-center'>
            Devialet for Professionals?
        </h1>
        <Link href='/' className='md:text-4xl text-2xl underline'>It is right here.</Link>
    </div>
  )
}

export default DevialetFor