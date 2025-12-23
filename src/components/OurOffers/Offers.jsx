import React from 'react';
import { TbRosetteDiscount } from "react-icons/tb";
import { PiHandshakeFill } from "react-icons/pi";
import { MdCreditScore } from "react-icons/md";
import { motion, spring } from "motion/react";
import './offers.css';

const Offers = () => {
    return (
        <>
            <section>
                <div className='container mx-auto pt-280 md:pt-200 lg:pt-80 xl:pt-62 mb-14 px-6 md:px-8 lg:px-10 xl:px-0'>
                    {/* offer container */}
                    <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{ type:"spring", stiffness:300, damping:8, duration:0.5, delay:0.3}} viewport={{once:true}} className='w-full lg:h-[55vh] 2xl:h-[50vh] bg-white rounded-2xl p-10 md:p-10 lg:p-15 lg:px-0 shadow-xl'>
                        {/* offer heading section */}
                        <div className='flex justify-center'>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold capitalize col-ch-idk mb-10'>Offers For You</h1>
                        </div>
                        {/* offer section 1 */}
                        <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3'>

                            {/* icon texet section */}
                            <div className='flex flex-col justify-center items-center'>
                                <TbRosetteDiscount size={70} className='my-icon' />
                                <h3 className='text-[20px] md:text-2xl font-semibold mt-5 mb-5 '>First Month Discount</h3>
                                <p className='w-[16rem] xl:w-[18rem] text-center text-chan-to-som text-[18px]'>Get started with a special discounted rate on your first month of training and kickstart your fitness journey affordably.</p>
                            </div>

                            {/* offer section 2 */}

                            {/* icon texet section */}
                            <div className='flex flex-col justify-center items-center mt-6 md:mt-0'>
                                <PiHandshakeFill size={70} className='my-icon' />
                                <h3 className='text-[20px] md:text-2xl font-semibold mt-5 mb-5 text-[#313131]'>Personal Training Package</h3>
                                <p className='w-[16rem] xl:w-[18rem] text-center text-chan-to-som text-[18px]'>One-on-one coaching sessions tailored to your fitness goals with expert support, guidance, and progress tracking.</p>
                            </div>

                            {/* offer section 3 */}

                            {/* icon texet section */}
                            <div className='flex flex-col justify-center items-center mt-5'>
                                <MdCreditScore size={70} className='my-icon' />
                                <h3 className='text-[20px] md:text-2xl font-semibold mt-5 mb-5 text-[#313131]'>Monthly Membership</h3>
                                <p className='w-[16rem] xl:w-[18rem] text-center text-chan-to-som text-[18px]'>Flexible monthly plan with unlimited access to workouts, personal guidance, and full use of gym equipment.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Offers
