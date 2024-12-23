import React from 'react'

const About = () => {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center '>
      <div className='box-border rounded-md w-[40%] flex flex-col justify-center items-center gap-4 border-2 border-sky-600 mt-10'>
        <p className='font-medium text-2xl text-center mt-8'>Name of Software: Horizon For Billing Software</p>
        <p className='font-medium text-2xl text-center'>Software Version: 8.5.11</p>
        <p className='font-medium text-2xl text-center mt-14 mb-10'> Horizon Technology Pvt. Ltd.
          <br /> <span className='text-lg'>Jawalakhel-14, Lalitpur</span>
          <br/> <span className='text-lg'>9851150345, 01-4599030</span>
          <br/> <span className='text-lg'>Email: tech.horizon2017@gmail.com</span>
          <br/> <span className='text-lg'>Website: www.horizontechnology.com.np</span>
          </p>

        

      </div>
    </section>
  )
}

export default About