import DevialetFor from '@/components/DevialetFor'
import DiveInto from '@/components/DiveInto'
import Footer from '@/components/Footer'
import FreeShipping from '@/components/FreeShipping'
import Intro from '@/components/Intro'
import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import Subscribe from '@/components/Subscribe'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gray-300'>
      <Landing />
      <div className='lg:p-20 p-5'>
        <Intro />
        <Products />
        <div className='flex flex-col md:flex-row items-center justify-between   p-5 rounded-xl'>
          <h1 className='text-4xl lg:text-6xl font-bold flex-1'>
            Stunning alone.
            Unmatchable in stereo.
          </h1>
          <p className='md:text-2xl text-lg font-normal flex-1'>
            Whether you’re looking to acquire your very first Devialet speaker at a preferential rate, upgrade your set-up to stereo or play in multiroom. Our Devialet Certified Refurbished Program is your unique chance to get your hands on the iconic matte and glossy finishes at a preferential rate.
          </p>
        </div>
      </div>
      <DiveInto />
      <DevialetFor/>
      <FreeShipping />
      <Subscribe />
    </div>
  )
}
