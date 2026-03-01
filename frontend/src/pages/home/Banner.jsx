import React from 'react'
import bannerImg from "../../assets/banner.png" ;
const Banner = () => {
  return (
    <div className = 'flex flex-col md:flex-row py-16 justify-between items-center gap-12'>
        <div className='md:w-1/2 w-full'>
           <h1 className='md:text-5xl text-2xl font-medium mb-7'>
            New Release This Week
            </h1>  
            <p className = 'mb-10'>It’s time to boost your coding journey
                 with the most valuable e - programming notes and 
                 resources. From detailed lecture notes on core subjects
                  like DSA, DBMS, and Operating Systems to advanced 
                  topics in AI and data science, this week’s new upload 
                  shave something useful for every budding developer.</p>
            <button className='btn-primary'>Subscribe</button>
        </div>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg}alt = ""/>
        </div>
    </div>
  )
}
export default Banner ; 