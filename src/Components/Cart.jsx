import React from 'react'
import styles from '../style'
import finance from '../assets/illustration-financial-freedom.svg'
import life from '../assets/illustration-lifestyle.svg'
import passions from '../assets/illustration-passions.svg'
import work from '../assets/illustration-work-anywhere.svg'

const Cart = () => {
  return (
    <div className='my-[88px] flex justify-center items-center'>
      <div className={`${styles.paddingX} flex lg:min-w-[1100px] lg:flex-row lg:flex-nowrap lg:gap-8 justify-center flex-wrap items-center flex-col text-center`}>
        <div className='cart1 lg:max-w-[255px] lg:text-left'>
          <img src={passions} alt="" className={`${styles.cartimg} lg:mr-[100%]`} />
          <div className='text_cont'>
            <h4 className= {`${styles.heading3} mb-[11px]`}>Indulge your passions</h4>
            <p className={`${styles.paragraph}`}>Your passions shouldn't be just for the weekend. Earn a living doing what you love.</p>
          </div>
        </div>
        <div className='cart2 lg:mt-[48px] lg:max-w-[255px] lg:text-left'>
          <img src={finance} alt="" className={`${styles.cartimg} lg:mr-[100%]`} />
          <div className='text_cont'>
            <h4 className= {`${styles.heading3} mb-[11px]`}>Gain financial freedom</h4>
            <p className={`${styles.paragraph}`}>Start making money work for you. There’s nothing quite like earning while you sleep.</p>
          </div>
        </div>
        <div className='cart3 lg:max-w-[255px] lg:text-left'>
          <img src={life} alt="" className={`${styles.cartimg} lg:mr-[100%]`} />
          <div className='text_cont'>
            <h4 className= {`${styles.heading3} mb-[11px]`}>Choose your lifestyle</h4>
            <p className={`${styles.paragraph}`}>Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.</p>
          </div>
        </div>
        <div className='cart4 lg:mt-[48px] lg:max-w-[255px] lg:text-left'>
          <img src={work} alt="" className={`${styles.cartimg} lg:mr-[100%] py-[34px]`} />
          <div className='text_cont'>
            <h4 className= {`${styles.heading3} mb-[11px]`}>Work from anywhere</h4>
            <p className={`${styles.paragraph}`}>Selling online means not being pinned down. Want to work AND travel? Go for it!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart