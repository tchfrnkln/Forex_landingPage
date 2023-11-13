import React from 'react'
import { BsFacebook, BsTelegram, BsWhatsapp } from 'react-icons/bs';

function Navbar() {

    var list:{key:number, name:string}[] = [{key:1, name:"Whos the training for?"}, {key:2, name:"Program"}, {key:3, name:"Review"}, {key:4, name:"Aurthor"}]
  return (
    <main className='w-full flex justify-between md:items-center p-6'>
        <div className='font-bold'>C-Chu Global</div>
        <div className='flex flex-col md:flex-row justify-between items-center w-[50%]  md:w-[65%]'>
            <div className='w-full md:w-3/5 md:flex justify-evenly text-xs'>
                {
                    list.map(lst=>(
                        <p key={lst.key} className='pb-4 text-center md:te md:pb-0 cursor-pointer '>{lst.name}</p>
                    ))
                }
            </div>
            <div className='flex justify-between w-24'>
                {/* icons */}
                <BsFacebook></BsFacebook>
                <BsWhatsapp></BsWhatsapp>
                <BsTelegram></BsTelegram>
            </div>
        </div>
    </main>
  )
}

export default Navbar