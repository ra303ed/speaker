import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidShoppingBag } from 'react-icons/bi'


const Products = () => {
  return (
    <div className='lg:p-20 px-5 py-20 overflow-hidden '>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-10 '>
            <Link href='/' className='bg-white  p-5 border flex flex-col justify-center rounded-lg shadow-lg'>
                    <div className='flex flex-col justify-center items-start'>
                        <h3 className='text-lg font-semibold '>
                        Phantom I 103 dB Refurbished
                        </h3>
                        <p className='text-lg text-black/70'>
                            103 dB SPL. 16Hz – 25kHz. 500 Watts RMS.
                        </p>
                    </div>

                
                <Image 
                    src='/prod1.jpg'
                    width={400}
                    height={200}
                    alt=''
                    className='object-center bg-cover rounded-lg '
                />
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-lg p-2 font-normal '>1200$</p>
                    </div>
                    <div>
                        <p className='p-4 border-2 rounded-lg text-black custom-hover '>
                            <BiSolidShoppingBag />
                        </p>
                    </div>

                </div>
            </Link>


            <Link href='/' className='bg-white  p-5 border flex flex-col justify-center rounded-lg shadow-lg'>
                    <div className='flex flex-col justify-center items-start'>
                        <h3 className='text-lg font-semibold '>
                        Phantom I 103 dB Refurbished
                        </h3>
                        <p className='text-lg text-black/70'>
                            103 dB SPL. 16Hz – 25kHz. 500 Watts RMS.
                        </p>
                    </div>

                
                <Image 
                    src='/prod2.jpg'
                    width={400}
                    height={200}
                    alt=''
                    className='object-center bg-cover rounded-lg '
                />
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-lg p-2 font-normal '>1200$</p>
                    </div>
                    <div>
                        <p className='p-4 border-2 rounded-lg text-black custom-hover '>
                            <BiSolidShoppingBag />
                        </p>
                    </div>

                </div>
            </Link>


        </div>
    </div>
  )
}

export default Products