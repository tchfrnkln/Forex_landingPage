import Image from 'next/image'
import React from 'react'


function FrontPage() {

    var toLearn:{key:number, name:string, body:string }[] = [{key:1, name:"Aspiring Investors", body:"Are you an individual who is looking for investment opportunities, forex trading is a way to diversify your investment portfolio?"}, {key:2, name:"Financial Enthusiast", body:"Are you someone who has a genuine interest in financial markets and enjoys learning about economic indicators, currency movements, and global financial trends?"}, {key:3, name:"Entrepreneur and Business Professional", body:"Are you an entrepreneur or business professional who is seeking ways to maximize their financial resources? These is a means to leverage your financial skills and potentially generate additional income beyond all other primary business ventures"}, {key:4, name:"Side-Hustle Seekers", body:"Are you actively seeking ways to supplement your current earnings, exploring forex trading as a side hustle? This is the potential for additional financial gains and flexibility"}]


    var values:{key:number, head:string, list:string}[] = [{key:1, head:"Forex Foundation", list:"What is forex? History of FOrex, Why you should start trading forex, Forex Participants, Forex Influnecers, Currency Pairs, Brokers, Trading Session"},{key:2, head:"Forex Mastery", list:"Charting tools, Candlestick Patterns, Chart Patterns, Technical Anaylsis, Support and Resistance, Trend and Trendlines, Indicators, Fundamental Analysis"},{key:3, head:"Trading Strategy", list:"How to use MT4, How to create an account, Choosing the right Brokers, Entry Strategy, Price Action Strategy, Trading Success Tips, Risk Management"}, {key:4, head:"Extra BONUSES", list:"1 Month Trade Signal, Cheatsheet to help you turn $10 to $500 in 90 days with proper risk management, 3 Ebooks that will change your life and help you become a winning trader, 3 Months Mentorship, $5,000 Live account for the best student"}]

  return (
    <main className='px-4 md:px-12 text-white'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 py-2'>
            <div className='p-2 md:p-6 rounded w-full'>
                <p className='text-xs'>a chance to invest in yourself and your future</p>
                <h1 className='text-5xl font-bold py-3 w-4/5'>Forex Trading Expo</h1>
                <p className='text-xs w-full md:w-4/5'>1 Month Trade Signal, Cheatsheet to help you turn $10 to $500 in 90 days with proper risk management, 3 Ebooks that will change your life and help you become a winning trader, 3 Months Mentorship plus a $5,000 Live account for the best student</p>
                <button className='px-10 p-4 font-bold text-xs rounded-full bg-green-400 text-black my-6'>Register</button>
            </div>
            {/* Image */}
            <div className='p-6 rounded relative bg-cover bg-center w-full md:w-4/5 lg:w-3/5 h-[300px]' style={{backgroundImage:`url("https://i0.wp.com/silasumekwe.com/wp-content/uploads/2022/01/photo_2022-01-16-00.14.06.jpeg?w=1280&ssl=1")`}}>
                <div className="absolute h-max -left-3 top-48 w-[200px] lg:w-max p-1 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-xs">
                    <p className='font-bold'>Silas Umekwe</p>
                    <p>Founder & CEO of over seven privately held companies</p>
                </div>
                <div className="absolute h-max top-10 md:top-24 -right-2 md:-right-8 w-[160px] lg:w-max p-1 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-xs">
                    <p className='font-bold'>14 Years</p>
                    <p>of experience in Investing and Forex Trading</p>
                </div>
                <div className="absolute h-max -bottom-6 left-32 w-[160px] lg:w-max p-1 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-xs">
                    <p className='font-bold'>Author</p>
                    <p>Crypto Investors Play Book</p>
                </div>
            </div>
        </div>
        <div className='w-full rounded-lg mt-10 p-6 bg-black flex flex-col md:flex-row justify-evenly'>
            {toLearn.map(tln =>(
                    <div key={tln.key} className='flex flex-col pb-6 text-xs w-full md:w-1/5'>
                        <p className='font-bold'>{tln.name}</p>
                        <p>{tln.body}</p>
                    </div>
                ))}
        </div>
        <div className='py-12'>
            <div className='flex justify-between items-center px-6 md:px-12 md:flex-row flex-col'>
                <h1 className='text-4xl font-bold'>Expect Value even as Huge as</h1>
                <button className='hidden px-10 p-4 font-bold text-xs rounded-full bg-green-400 text-black my-6'>Sign up for training</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 p-4 md:p-12'>
                {values.map(val => (
                        <div key={val.key} className='flex flex-col text-xs p-6'>
                            <p className='font-bold py-2'>{val.head}</p>
                            <p>{val.list}</p>
                        </div>
                    ))}
                {/* <Image src="/ForexExpo.jpg" alt='Forex Expo' width={200} height={220}/> */}
                <button className='px-10 p-4 md:hidden font-bold text-xs rounded-full bg-green-400 text-black my-6'>Sign up for training</button>
            </div>
        </div>
    </main>
  )
}

export default FrontPage