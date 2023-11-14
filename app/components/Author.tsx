import React from 'react'

function Author() {

    var shorts:{key:number, name:string}[] = [{key:1, name:"Entrepreneurial Visionary and Crypto Pioneer"}, {key:2, name:"Financial Mentor"}, {key:3, name:"Media Mogul and Global Event Organizer"}, {key:4, name:"Educational Trailblazer and Business Educator"}, {key:5, name:"Multifaceted Professional and Relationship Advocate"}]

  return (
    <main className='p-6 flex flex-col justify-center items-center bg-gradient-to-br from-white to-purple-500 text-black'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='p-6'>
                <p className='text-2xl font-bold'>Silas Umekwe</p>
                <p className='text-xs'>Silas Umekwe is an active serial entrepreneur and a certified business expert. He is the Founder & CEO of over seven privately held companies including C-Chu Global, CryptoStorez, Leeway Educational Foundation, Turtle Doven Token & C-Chu Media.</p>
            </div>
            <div className='p-6 rounded relative bg-cover bg-center h-[300px]' style={{backgroundImage:`url("https://leewayedu.com/wp-content/uploads/2018/01/CEO.png")`}}></div>
            <div className='p-6'>
                {shorts.map(shrt =>(
                    <div key={shrt.key}>
                        <p className='text-xs'>{shrt.name}</p>
                    </div>
                ))}
            </div>
        </div>
        <button className='hidden px-10 p-4 font-bold text-xs rounded-full bg-green-400 text-black my-6'>Register</button>
    </main>
  )
}

export default Author