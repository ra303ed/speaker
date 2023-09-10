import Link from 'next/link'
import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { TbTruckReturn } from 'react-icons/tb'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { LuSaveAll } from 'react-icons/lu'

const FreeShipping = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 px-10 py-20 lg:p-20 bg-white  gap-10 text-sm'>
        <Link href='/' className='flex flex-col gap-3 items-center justify-center'>
            <p className='p-3 border border-black rounded-full'>
                <LiaShippingFastSolid size={40} />
            </p>
            FREE UPS SHIPPING
        </Link>
        <Link href='/' className='flex flex-col gap-3 items-center justify-center'>
            <p className='p-3 border border-black rounded-full'>
                <TbTruckReturn size={40} />
            </p>
            14-DAY RETURN POLICY
        </Link>
        <Link href='/' className='flex flex-col gap-3 items-center justify-center'>
            <p className='p-3 border border-black rounded-full'>
                <RiSecurePaymentLine size={40} />
            </p>
            SECURE PAYMENT
        </Link>
        <Link href='/' className='flex flex-col gap-3 items-center justify-center'>
            <p className='p-3 border border-black rounded-full'>
                <LuSaveAll  size={40}/>
            </p>
            2-YEARS WARRANTY
        </Link>
    </div>
  )
}

export default FreeShipping