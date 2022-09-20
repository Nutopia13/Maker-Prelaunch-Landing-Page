import React from 'react'
import styles from '../style'
import free from '../assets/icon-free.svg'
import paid from '../assets/icon-paid.svg'
import check from '../assets/icon-check.svg'
import check2 from '../assets/icon-check2.svg'

const Plans = () => {
  return (
    <div>
      <div className='px-7 '>
        <div className='text_cont m-auto lg:max-w-[600px] text-center'>
          <h2 className={`${styles.heading2} mb-[27px]`}>
          Our pricing plans
          </h2>
          <p className = {`${styles.paragraph} lg:mb-[117px]`}>We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
        </div>

        <div className='mt-[70px] lg:gap-[30px] flex justify-center flex-row flex-wrap'>
          <div className="cart_dip text-left bg-plain-blue rounded-lg	">
            <img src={free} alt="" className='pl-[30px] pb-[10px] relative bottom-6'/>
            <h4 className={`${styles.heading3} lg:px-[38px] pl-[30px] mb-[19px]`}>Dip your toe</h4>
            <p className={`${styles.paragraph} lg:px-[38px] lg:max-w-[450px] px-[30px]`}>Just getting started? No problem at all! Our free plan will take you a long way.</p>
            <h3 className='font-extra-bold mt-[26px]  lg:px-[38px] pl-[30px] text-2xl font-manrope mb-[19px] text-white'>Free</h3>
            <ul className=' pl-[30px] pb-[32px] lg:pb-[48px] lg:px-[38px] text-white text-sm'>
              <li>Unlimited products</li>
              <li>Basic analytics</li>
              <li>Limited marketplace exposure</li>
              <li>10% fee per transaction</li>
            </ul>

          </div>
          <div className="mt-[50px] lg:mt-0 dive text-left bg-azure rounded-lg">
          <img src={paid} alt="" className='pl-[30px] pb-[10px] relative bottom-8'/>
            <h4 className={`${styles.heading3} text-primary-bg lg:px-[38px] pl-[30px] mb-[19px]`}>Dive right in</h4>
            <p className={`${styles.paragraph} lg:max-w-[410px] lg:px-[38px] px-[30px]`}>Ready for the big time? Our paid plan will help you take your business to the next level.</p>
            <h3 className='price text-primary-bg font-extra-bold  lg:px-[38px] mt-[26px] pl-[30px] text-2xl font-manrope mb-[19px]'>$25.00</h3>
            <ul className=' pl-[30px] pb-[32px] text-primary-bg  lg:px-[38px] text-sm'>
              <li>Custom domain</li>
              <li>Advanced analytics and reports</li>
              <li>High marketplace visibility</li>
              <li>5% fee per transaction</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Plans