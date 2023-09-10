'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {

    const [aboutOpen, setAboutOpen ] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [storesOpen, setStoresOpen] = useState(false)
    const [supportOpen, setSupportOpen] = useState(false)



  return (
    <div className=' lg:p-20 px-5 py-10 bg-gray-300 '>
        <div className='grid lg:grid-cols-4  lg:gap-20 gap-5'>
            {/* ================= One =================  */}
            <div className='flex flex-col gap-5 border border-black p-2 lg:border-none'>

                <div 
                    className='flex items-center justify-between cursor-pointer'
                    onClick={() => {setAboutOpen(!aboutOpen)}}
                >
                    <h3 className='font-semibold text-xl lg:py-5  lg:px-0'>About Us</h3>
                    <button 
                        className='border-2 border-black px-1 flex lg:hidden cursor-pointer custom-hover2  '
                    >
                        {
                            aboutOpen 
                            ? <p>-</p>
                            : <p>+</p>
                        }
                    </button>

                </div>
                <ul className={
                        aboutOpen ? 'flex flex-col ease-in-out duration-200'
                        : 'lg:flex hidden flex-col gap-3 ease-in duration-200'
                    } >
                        <Link href='/'>Company Presentation</Link>
                        <Link href='/'>Our Stories</Link>
                        <Link href='/'>Careers</Link>
                        <Link href='/'>Press</Link>
                    </ul>

            </div>
            {/* ================= Two =================  */}

            <div className='flex flex-col gap-5 border border-black p-2 lg:border-none'>

                <div 
                    className='flex items-center justify-between cursor-pointer'
                    onClick={() => {setServicesOpen(!servicesOpen)}}
                >
                    <h3 className='font-semibold text-xl lg:py-5  lg:px-0'>Services</h3>
                    <button 
                        className='border-2 border-black px-1 flex lg:hidden custom-hover2 '
                    >
                        {
                            servicesOpen 
                            ? <p>-</p>
                            : <p>+</p>
                        }
                    </button>

                </div>
                <ul className={
                        servicesOpen ? 'flex flex-col'
                        : 'lg:flex hidden flex-col gap-3 '
                    } >
                        <Link href='/'>Upgrade program</Link>
                        <Link href='/'>Repair program</Link>
                        <Link href='/'>Last chance</Link>
                        <Link href='/'>Devialet Care</Link>
                    </ul>

            </div>
            {/* ================= Three =================  */}
            <div className='flex flex-col gap-5 border border-black p-2 lg:border-none'>

                <div 
                    className='flex items-center justify-between cursor-pointer'
                    onClick={() => {setStoresOpen(!storesOpen)}}
                >
                    <h3 className='font-semibold text-xl lg:py-5  lg:px-0'>Stores</h3>
                    <button 
                        className='border-2 border-black px-1 flex lg:hidden custom-hover2'
                    >
                        {
                            storesOpen
                            ? <p>-</p>
                            : <p>+</p>
                        }
                    </button>

                </div>
                <ul className={
                        storesOpen ? 'flex flex-col'
                        : 'lg:flex hidden flex-col gap-3 '
                    } >
                    <Link href='/'>Find a Store</Link>
                    </ul>

            </div>

            {/* ================= Four =================  */}
            <div className='flex flex-col gap-5 border border-black p-2 lg:border-none'>

                <div 
                    className='flex items-center justify-between cursor-pointer'
                    onClick={() => {setSupportOpen(!supportOpen)}}
                >
                    <h3 className='font-semibold text-xl lg:py-5  lg:px-0'>Support</h3>
                    <button 
                        className='border-2 border-black px-1 flex lg:hidden cursor-pointer custom-hover2'
                        onClick={() => {setSupportOpen(!supportOpen)}}
                    >
                        {
                            supportOpen
                            ? <p>-</p>
                            : <p>+</p>
                        }
                    </button>

                </div>
                <ul className={
                        supportOpen ? 'flex flex-col'
                        : 'lg:flex hidden flex-col gap-3 '} 
                >
                    <Link href='/'>Contact us</Link>
                    <Link href='/'>Help center</Link>
                    <Link href='/'>My account</Link>
                    <Link href='/'>Tutorials</Link>                    
                </ul>

            </div>
        </div>



    </div>
  )
}

export default Footer