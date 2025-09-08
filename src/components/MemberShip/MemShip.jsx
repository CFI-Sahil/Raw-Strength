import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { MemShipData } from './membership';
import { motion } from "motion/react";
import './member.css';
const MemShip = () => {
    return (
        <>
            <section>
                <div id='JoinNow' className='container mx-auto mt-20 mb-20'>
                    <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5 }} viewport={{once:true, amount:0.1}} className="bg-white rounded-xl shadow-md p-14 h-106rem lg:h-[44rem] w-[100%]">
                        {/* heading */}
                        <h3 className=" capitalize text-center text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-10 tex-to-head">membership plans</h3>
                        {/* list section */}

                        <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-10'>
                        {/* section 1 basic */}
                        <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay:0.1}} viewport={{once:true}} className="for-tbg-ch p-6 rounded-xl shadow-md h-[470px] w-[380px] lg:h-[540px] xl:h-[498px] lg:w-[290px] xl:w-[380px] add-animation-1 add-ani-sa">
                            {/* heading */}
                            <h3 className="bg-to-pr inline-block text-white py-1 px-2 rounded text-[16px] lg:text-[18px] xl:text-xl font-bold">6 month</h3>
                            {/* title section */}
                            <div>
                                <p className="text-to-pr text-white p-1 rounded text-[16px] xl:text-xl font-semibold">Exploring the basics</p>
                            </div>
                            {/* pricing section */}
                            <div>
                                <p className='font-medium text-gray-800'>₹15,000 / 6 month</p>
                            </div>
                            <hr className='border-gray-400 mt-2 mb-4' />
                            {/* list section */}
                            <ul className='flex flex-col justify-center gap-y-5 fill-content'>
                                {MemShipData.filter(item => item.id === 1)[0].benefits.map((benefit, index) => (
                                    <li className='text-[16px] lg:text-[16px] xl:text-[18px] chan-tex-col flex items-start gap-2' key={index}>
                                        <FaCheck className="text-green-500 mt-1" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            {/* button section */}
                            <div className='flex justify-center'>
                                <button className='capitalize get-st-btn px-10 py-3 rounded-full mt-8 xl:mt-6'>get started</button>
                            </div>
                        </motion.div>


                        {/* section 2 pro */}
                        <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay:0.3}} viewport={{once:true}} className="for-tbg-ch p-6 rounded-xl shadow-md h-[470px] w-[380px] lg:h-[540px] xl:h-[498px] lg:w-[290px] xl:w-[380px] add-animation-2 add-ani-sa">
                            {/* heading */}
                            <h3 className="bg-to-pr inline-block text-white py-1 px-2 rounded text-[16px] lg:text-[18px] xl:text-xl font-bold">1 year</h3>
                            {/* title section */}
                            <div>
                                <p className="text-to-pr text-white p-1 rounded text-[16px] xl:text-xl font-semibold">Basic + Membership Upgrade</p>
                            </div>
                            {/* pricing section */}
                            <div>
                                <p className='font-medium text-gray-800'>₹15,000 / 6 month</p>
                            </div>
                            <hr className='border-gray-400 mt-2 mb-4' />
                            {/* list section */}
                            <ul className='flex flex-col justify-center gap-y-5 fill-content'>
                                {MemShipData.filter(item => item.id === 2)[0].benefits.map((benefit, index) => (
                                    <li className='text-[16px] lg:text-[16px] xl:text-[18px] chan-tex-col flex items-start gap-2' key={index}>
                                        <FaCheck className="text-green-500 mt-1" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            {/* button section */}
                            <div className='flex justify-center'>
                                <button className='capitalize get-st-btn px-10 py-3 rounded-full mt-3 xl:mt-6'>get started</button>
                            </div>
                        </motion.div>


                        {/* section 3 premium */}
                        <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay:0.5}} viewport={{once:true}} className="for-tbg-ch p-6 rounded-xl shadow-md h-[470px] w-[380px] lg:h-[540px] xl:h-[498px] lg:w-[290px] xl:w-[380px] add-animation-3 add-ani-sa">
                            {/* heading */}
                            <h3 className="bg-to-pr inline-block text-white py-1 px-2 rounded text-[16px] lg:text-[18px] xl:text-xl font-bold">3 years</h3>
                            {/* title section */}
                            <div>
                                <p className="text-to-pr text-white p-1 rounded text-[16px] xl:text-xl font-semibold">All Access Performance+</p>
                            </div>
                            {/* pricing section */}
                            <div>
                                <p className='font-medium text-gray-800'>₹15,000 / 6 month</p>
                            </div>
                            <hr className='border-gray-400 mt-2 mb-4' />
                            {/* list section */}
                            <ul className='flex flex-col justify-center gap-y-5 fill-content'>
                                {MemShipData.filter(item => item.id === 3)[0].benefits.map((benefit, index) => (
                                    <li className='text-[16px] lg:text-[16px] xl:text-[18px] chan-tex-col flex items-start gap-2' key={index}>
                                        <FaCheck className="text-green-500 mt-1" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            {/* button section */}
                            <div className='flex justify-center'>
                                <button className='capitalize get-st-btn px-10 py-3 rounded-full mt-14 xl:mt-12'>get started</button>
                            </div>
                        </motion.div>
                    </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default MemShip