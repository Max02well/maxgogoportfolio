import React from 'react'
import myImg from '../assets/IMG_9313.jpg';
import {MdOutlineKeyboardArrowRight,} from 'react-icons/md';
import {Link} from 'react-scroll'

const Home = () => {
return (
    <div name="home" className='w-full h-screen bg-gradient-to-b  from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full  px-2 md:flex-row'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-4xl sm:text-7xl font-bold text-cyan-400'>UI/UX Designer</h2>
                <p className='text-gray-300 py-8 max-w-md'>I am a fourth year IT student at Dedan Kimathi University of Technology-Kenya.Currently I am proficient in designing user interfaces with Figma.I also have basic knowledge in ReactJS,React Native,MongoDB and as well Tailwind CSS </p>
                <div>
                    <Link to='portfolio' smooth duration={500}><button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'> Portfolio<span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span></button></Link>
                </div>
            </div>
            <div className='p-2 max-w-96 ml-12 mt-0'><img src={myImg} alt='my profile'className='rounded-2xl mx-auto  md:w-full'/></div>
        </div>
    </div>
)
}

export default Home
