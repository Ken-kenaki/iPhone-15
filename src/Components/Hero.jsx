import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useState } from 'react'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth <760 ? smallHeroVideo : heroVideo)



  const handleHeroVideo = () => {
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    }
    else{
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleHeroVideo)
    console.log('hero mounted')

    return () =>{
      window.removeEventListener('resize', handleHeroVideo)
      console.log('hero unmounted')
    }

  },[])


  // useEffect(()=>{
  //   console.log('hero mounted')
  // },[videoSrc])

  useGSAP(()=>{
    gsap.to('.hero-title',{ opacity: 1, delay: 1.5,})
    gsap.to('#cta', {opacity: 1,y: -50 ,delay: 2.5})
  },[])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col gap-2.5 pt-50'>
      <p className='hero-title'>iPhone 15 Pro</p>
      <div className='md:w-10/12 w-9/12'>
        <video autoPlay muted loop playsInline={true} key={videoSrc} className='pointer-events-none'>
          <source src={videoSrc} type='video/mp4'/>
        </video>
      </div>
      <div id="cta"
     className='flex-center flex-col traslate-y-20 opacity-0'> 

        <a href="#highlights" className='btn'>
          Buy
        </a>
        <p
        className='font-normal text-xl '
        >From $199/month or $999</p>
      </div>
      </div>

    </section>
  )
}

export default Hero