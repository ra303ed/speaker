import Image from 'next/image'
import React from 'react'

const EngineeringExcellence = () => {
  return (
    <div>
        <Image
            src='/prod2.jpg'
            width={500}
            height={500}
            alt=''
            className='object-cover'
        />
        <div>
            <h1>
                Engineering <br/>
                <span>excellence.</span> 
            </h1>
            <p>
                We’re committed to the sustainability of our products. The Devialet Certified Refurbished Program not only gives Devialet Phantom new life, but also repurposes our end-to-end innovation to offer ever-enhanced acoustics. To create Devialet Phantom, we built our own plant, hired talents from diverse industries, and crafted our own robotics and quality control capabilities. And the same precision and processes are applied to every Certified Refurbished Devialet Phantom.
            </p>
        </div>
    </div>
  )
}

export default EngineeringExcellence