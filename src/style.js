const styles = {


    heading1: 'font-manrope font-extra-bold leading-10 lg:leading-[56px] lg:text-4xl text-xlg text-white',
    heading2: 'font-manrope font-extra-bold leading-[32px] lg:leading[43px] lg:text-xlg text-tiny text-white',
    heading3: 'font-manrope font-extra-bold text-base text-white',
    paragraph: 'font-manrope font-medium leading-6 text-sm text-grey',
    cartimg: 'lg:m-none m-auto mt-[56px] mb-[32px] py-[22px] px-[30px] bg-plain-blue rounded-[45px] max-h-[124px] max-w-[120px]',
    btn: 'transition ease-in-out delay-150 hover:scale-110 font-manrope border-2 border-solid border-azure min-w-[327px] max-h-[48px] bg-azure text-sm rounded-3xl font-extra-bold hover:bg-transparent hover:text-white active:bg-transparent text-plain-blue py-[12px] px-[18px]',

    boxWidth: "lg:max-w-[1280px] w-full",
    boxWidth2: 'w-full',


    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "px-7 md:px-24 lg:px-40",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "mx-6 lg:mx-[165px]",
    marginY: "my-16 lg:my-40",
}

export const layout = {
    section: `flex ${styles.paddingY}`,
  };
  
  export default styles;

  
