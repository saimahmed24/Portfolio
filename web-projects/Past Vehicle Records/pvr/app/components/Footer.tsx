import React from 'react'
import Image from "next/image";
import { BiMailSend } from 'react-icons/bi';




const Footer = () => {
  return (
    <div className='w-full h-full bg-[#328fd2] flex flex-col items-center justify-center'>
        <div className=''>
            <Image src="/PVR.jpeg" alt="logo"
             width={48}  // Set the width you need
             height={48} // Set the height you need
            />
        </div>
        <div>
            <ul>
                <li>
                    <BiMailSend/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
