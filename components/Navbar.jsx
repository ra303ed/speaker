'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { BiSolidUserCircle, BiSolidShoppingBag } from 'react-icons/bi'
import { FaSpeakerDeck } from 'react-icons/fa'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsQuestionCircle } from 'react-icons/bs'


const Navbar = () => {

    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect (()=> {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            } 
        };
        document.addEventListener("mousedown", handler);
    });

  return (
    <nav className='bg-white px-10 md:px-20 py-5 top-0 left-0 w-full fixed shadow-sm'>
        <div className='flex items-center justify-between '>

            <div className=' flex gap-3 items-center'>
                <div 
                    className='cursor-pointer flex lg:hidden  '
                    onClick={()=> {setOpen(!open)}}
                    >
                    {
                        open 
                        ? <AiOutlineClose size={20} />
                        : <HiOutlineMenuAlt4 size={20} />
                    }
                </div>
                <Link href='/' className='text-2xl font-bold text-black flex gap-2 items-center'>
                    
                    <FaSpeakerDeck size={40} />
                </Link>
            </div>

            <div className='lg:flex hidden items-center justify-between'>
                <div className='flex items-center justify-between gap-6'>
                    <Link href='/'>Speakers</Link>
                    <Link href='/'>Soundbar</Link>
                    <Link href='/'>Earbuds</Link>
                </div>
            </div>
            <div className='flex items-center justify-between gap-5'>
                    <Link href='/' className=''>
                        <BiSolidUserCircle size={20}/>
                    </Link>
                    <Link href='/' className=''>
                        <BiSolidShoppingBag size={20} />
                    </Link>
                </div>

        </div>
        {/* ====================== menu ======================  */}
        

        <div 
            className={
            open ? 'flex flex-col items-start justify-between gap-20 top-20  ease-in-out duration-300 pt-20 z-[100] '
            : ' hidden top-[-100%]'
            }
            ref={menuRef}
        
        >
                <div className='flex flex-col items-start justify-between gap-6 '>
                    <Link href='/' className='text-xl font-semibold'>Speakers</Link>
                    <Link href='/' className='text-xl font-semibold'>Soundbar</Link>
                    <Link href='/' className='text-xl font-semibold'>Earbuds</Link>
                </div>
                <div className=' border-t w-full flex items-end '>
                    <Link href='/' className='py-5 flex items-center gap-2'>
                        <BsQuestionCircle  size={20}/>
                        Support
                    </Link>

                </div>
            </div>
    </nav>
  )
}

export default Navbar