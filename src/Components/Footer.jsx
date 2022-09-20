import React from 'react'
import foot from '../assets/bg-footer-squiggle.svg'
import styles from '../style'

const Footer = () => {
  return (
    <div className='mt-[145px] mb-[164px] text_foot lg:min-h-[228px]'>
      <div className=' text-center text-white mb-[31px]'>
        <h2 className={`${styles.heading2} lg:max-w-[730px] max-w-[220px] m-auto leading-[32px]`}>Get notified when we launch</h2>
      </div>
      <div>
        <form method="POST" className='flex flex-wrap flex-col m-auto place-items-center'>
          {/* <label for='email'>Email Address: </label> */}
    			<input id='email' required pattern='[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}' type='email' title="Must be a valid email address" className='rounded-3xl text-white pl-[18px] py-[11px] bg-plain-blue min-w-[327px]'></input>
          <button className={`${styles.btn} mt-[24px]`}>Get Notified</button>
        </form>
      </div>
    </div>
  )
}

export default Footer