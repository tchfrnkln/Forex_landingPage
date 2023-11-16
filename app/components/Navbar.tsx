"use client"
import React, { useEffect, useState } from 'react'
import { BsFacebook, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { PaystackButton } from 'react-paystack';
import PayBtn from './PayBtn';
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
    const [navtog, setnavtog] = useState(false)

    useEffect(() => {
        window.innerWidth < 800 ? setnavtog(false) : setnavtog(true)
        const handleResize = () => {
          window.innerWidth < 800 ? setnavtog(false) : setnavtog(true)
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []); 

    var list:{key:number, name:string}[] = [{key:1, name:"Who is the training for?"}, {key:2, name:"Program"}, {key:3, name:"Review"}, {key:4, name:"Author"}]
  return (
    <main className='w-full flex justify-between md:items-center p-6 relative text-white'>
        <div className='font-bold text-white'>C-Chu Global</div>
        <div className='md:hidden cursor-pointer' onClick={e => setnavtog(!navtog)}>
            <HiMenuAlt3/>
        </div>
        {navtog && <div className='transition ease-in-out absolute top-14 right-0 md:relative md:top-0 md:right-0 flex flex-col md:flex-row justify-between items-center w-[50%] md:w-[65%] bg-purple-900 md:bg-inherit bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg md:drop-shadow-none pt-6 md:pt-0'>
            <div className='w-full md:w-3/5 md:flex justify-evenly text-xs'>
                {list.map(lst=>(
                        <p key={lst.key} className='pb-4 text-center md:pb-0 cursor-pointer '>{lst.name}</p>
                    ))}
            </div>
            <div className='flex justify-between w-24'>
                {/* icons */}
                <BsFacebook></BsFacebook>
                <BsWhatsapp></BsWhatsapp>
                <BsTelegram></BsTelegram>
            </div>
            <PayBtn></PayBtn>
        </div>}
    </main>
  )
}

export default Navbar