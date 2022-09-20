import React from 'react'
import Logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <div className='flex justify-center md:block lg:block'>
      <div className='mt-[40px] md:mt-[48px] md:ml-[39px] lg:mt-[81px] lg:ml-[165px]'>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  )

}

export default Nav