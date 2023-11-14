import React from 'react'

function Program() {
    var values:{key:number, head:string, list:string}[] = [{key:1, head:"Forex Foundation", list:"What is forex? History of Forex, Why you should start trading forex, Forex Participants, Forex Influnecers, Currency Pairs, Brokers, Trading Session"},{key:2, head:"Forex Mastery", list:"Charting tools, Candlestick Patterns, Chart Patterns, Technical Anaylsis, Support and Resistance, Trend and Trendlines, Indicators, Fundamental Analysis"},{key:3, head:"Trading Strategy", list:"How to use MT4, How to create an account, Choosing the right Brokers, Entry Strategy, Price Action Strategy, Trading Success Tips, Risk Management"}, {key:4, head:"BONUS", list:"1 Month Trade Signal, Cheatsheet to help you turn $10 to $500 in 90 days with proper risk management, 3 Ebooks that will change your life and help you become a winning trader, 3 Months Mentorship, $5,000 Live account for the best student"}]
  return (
    <main className='w-screen h-max bg-white p-4 md:p-12 text-black overflow-hidden'>
        <h1 className='text-3xl font-bold'>Training Program</h1>
        <p className='text-xs'>4 Sessions under the control of the expert and his team</p>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='py-6 px-2 w-full md:w-2/3'>
            Facing the formidable challenges of 2023, a year marked by economic turbulence, we find ourselves standing at the crossroads of uncertainty. In the midst of adversity, C-CHU Global has committed itself to be a beacon of opportunity for 500 Nigerians who yearn for a brighter 2024. Recognizing the struggles many have endured, we are launching an initiative to empower individuals with the knowledge and skills to navigate the Forex market—a powerful gateway to financial independence.
                        <br></br><br></br>
            In our unwavering commitment to uplift our community, C-CHU Global is offering an exclusive opportunity for 500 eager individuals to delve into the world of Forex trading at a remarkably discounted rate of $25. This is not just a course; it is a transformative journey towards financial empowerment.
                        <br></br><br></br>
            <b>Why Forex Trading? </b>
            The Forex market presents a unique avenue for individuals to take control of their financial destinies. As traditional economic structures face unprecedented challenges, Forex trading emerges as a resilient and adaptable pathway to prosperity. By mastering the art of currency trading, participants gain the ability to harness global economic shifts to their advantage.
                        <br></br><br></br>
            Online Learning for Convenience and Accessibility:
            Recognizing the demands of contemporary life, our Forex trading class will be conducted entirely online. This ensures that participants can seamlessly integrate learning into their daily routines, irrespective of location or time constraints. We believe that education should be accessible to all, and online learning provides the flexibility needed to accommodate diverse schedules.
                        <br></br><br></br>
            <b>C-CHU Global Commitment: </b>
            Our commitment to the success of our participants goes beyond providing a course. We aim to foster a community of informed and empowered individuals. Throughout the course, participants will not only learn the intricacies of Forex trading but will also have access to mentorship, market insights, and a supportive network of fellow traders.
                        <br></br><br></br>
            <b>How to Benefit: </b>
            Securing a spot in this exclusive program is simple. Visit our website, register, and unlock the door to a transformative learning experience. With the discounted rate of $25, we have removed financial barriers to ensure that as many individuals as possible can embark on this journey towards financial freedom.
                        <br></br><br></br>
            <b>Embrace the Opportunity: </b>
            As 2023 draws its curtain, seize the chance to invest in yourself and your future. Together, lets defy the economic challenges of today and pave the way for a prosperous 2024. Join C-CHU Global on this empowering journey, and lets navigate the Forex markets together.
                        <br></br><br></br>
            Limited Spaces Available - Reserve Yours Now!
                        <br></br><br></br>
            Note: Terms and conditions apply. C-CHU Global reserves the right to close registration once the allocated spaces are filled.
            </div>
            <div className='w-full md:w-1/3 flex justify-center items-center'>
                <div className='w-full flex flex-wrap p-2 md:p-6 gap-4'>{
                        values.map(val=>(
                            <div key={val.key} className='text-xs border-4 rounded-lg border-purple-300 w-full md:w-64 p-4 md:p-6'>
                                <p className='font-bold py-2 md:py-6 text-lg'>{val.head}</p>
                                <p>{val.list}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='px-10 p-4 font-bold text-xs rounded-full bg-green-400 text-black my-6'>Reserve a Spot</button>
        </div>
    </main>
  )
}

export default Program