import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'


const Navigation = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'> 
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="" width={14} height={18}/>
            <div>
                {['home', 'about', 'services', 'contact'].map((nav, index)=>(
                    <div key={index}>{nav}</div>
                ))}
            </div>
            <div>
                <img src={searchImg} alt="" />
                <img src={bagImg} alt="" />

            </div>
        </nav>
    </header>
  )
}

export default Navigation