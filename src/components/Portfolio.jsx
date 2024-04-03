import React from 'react'
import p1 from '../assets/Eatery 1.png'
import p2 from '../assets/Doctor.png'
import p3 from '../assets/car3.JPG'


const Portfolio = () => {
    const projects = [
        {
            id:1,
            src:p1,
            demo:'',
        },
        {
            id:2,
            src:p2,
            demo:'',
        },
        {
            id:3,
            src:p3,
            demo:'',
        },
      
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
{
    projects.map(({ id, src }) => {
        return (
            <div key={id} className='shadow:md shadow-gray-600 rounded-lg'>
                <div>
                    <h1>Figma Designs</h1>
                <img src={src} alt="project" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-md'><a href=''>
                        </a>See More</button>
                        </div>
                   
                </div>
            </div>
        );
    })
}

</div>

      </div>
    </div>
  )
}

export default Portfolio
