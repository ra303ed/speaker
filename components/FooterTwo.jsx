import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'


const FooterTwo = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between bg-black text-white px-20 py-10 lg:py-0  items-center '>
        <p>
        Copyright © 2023 Company
        </p>
    <div className='flex gap-5 flex-col lg:flex-row justify-center items-center py-7 '>
        <Link href='/'>Legal</Link>
        <Link href='/'>Increase Contrast</Link>
        <Link href='/'>Cookie Preferences</Link>
    </div>
    <div className='flex  gap-5'>
        <Link href='/'>
          <BsFacebook />
        </Link>
        <Link href='/'>
          <BsInstagram />
        </Link>
        <Link href='/'>
          <RiTwitterXFill />
        </Link>
    </div>

</div>
  )
}

export default FooterTwo