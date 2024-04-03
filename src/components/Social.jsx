import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonFill } from "react-icons/bs";
const Social = () => {
    const socials = [
        {
           id:1,
           child: (
            <>
            LinkedIn <FaLinkedin  size={30}/>
            </>
           ),
           href:'https://www.linkedin.com/in/maxwell-gogo-2015a0231/',
           style:'rounded-tr-md'
        },
        {
            id:2,
            child: (
             <>
             GitHub <FaGithub size={30}/>
             </>
            ),
            href:'https://www.github.com/Max02well',
         },
         {
            id:3,
            child: (
             <>
             Mail <HiOutlineMail  size={30}/>
             </>
            ),
            href:'mailto:gogo.maxwell21@students.dkut.ac.ke',
         },
         {
            id:4,
            child: (
             <>
             Resume<BsFillPersonFill  size={30}/>
             </>
            ),
            href:'/MaxCV.pdf',
            style:'rounded-br-md',
            download:true,
         }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {socials.map(({id,child,href,style,download})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300  bg-gray-500' + ''+style}>
                <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">

                    {child}
                    
                    </a>
                    </li> 
            ))}
           
        </ul>
    </div>
  )
}

export default Social
