import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-between my-12'>
      <div className='basis-1/2'>
        <div className='bg-slate-200 24 w-2/3 aspect-square m-auto text-center align-middle py-32'>
          Image here
        </div>
      </div>
      <div className='basis-1/2'>
        <div className='w-2/3 mx-auto'>
          Blurb here Blurb here Blurb here Blurb here Blurb here Blurb here
        </div>
      </div>
    </div>
  )
}

export default About