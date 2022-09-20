import React from 'react'
import styles from '../style'
import Hero_Mobile from '../assets/illustration-hero-mobile.png'
import Mouse from '../assets/icon-scroll.svg'

const Hero = () => {
  return (
    <div className='mt-[64px] lg:flex lg:justify-center hero_bg lg:min-h-[470px]'>
      <div className='lg:hidden md:hidden'>
        <img src={Hero_Mobile} alt="" className='min-w-[410px] max-h-[233px]' />
      </div>
      <div className={`${styles.paddingX}text_cont flex flex-row flex-wrap justify-center text-center mt-[48px] min-w-[327px] max-w-[600px]`}>
        <h1 className={`${styles.heading1} mb-[23px] max-w-[250px] lg:min-w-[500px]`}>Get paid for the work you <span>love</span> to do.</h1>
        <p className={`${styles.paragraph} lg:min-w-[550px] mb-[32px]`}>The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
        <img src={Mouse} alt="" className='max-w-[26px] max-h-[42px]'/>

      </div>
    </div>
  )
}

export default Hero