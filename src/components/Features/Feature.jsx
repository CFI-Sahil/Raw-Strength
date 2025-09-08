import React from 'react'
import People from '../../assets/people.png'
import { GiMoneyStack } from "react-icons/gi";
import { CiMemoPad } from "react-icons/ci";
import { LuDumbbell } from "react-icons/lu";
import { motion } from "motion/react";
import './feature.css'
const Feature = () => {
    return (
        <>
            <section>
                <div className='container mx-auto relative mb-14'>
                    {/* image section of features */}
                    <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}} viewport={{once:true}} className='flex items-center px-6 xl:px-0'>
                        <img src={People} alt="People" className=' bg-cover bg-center slant-img' />
                    </motion.div>
                    {/* text heading section */}
                    <div className='absolute top-[110%] lg:top-[70%] xl:left-[8%] 2xl:left-[15%] px-12 xl:px-0'>
                        <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}} viewport={{once:true}} className='text-center slant-wrapper'>
                            <h1 className='make-it-head capitalize text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold lg:mb-14 leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]'>a place where Everyone <br /> feels welcome</h1>
                        </motion.div>

                        {/* icon with text section */}
                        <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 mt-14 lg:mt-16 xl:mt-20 mb-20'>
                            {/* icon 1 section */}
                            <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}} viewport={{once:true}} className='flex flex-col justify-center items-center mr-0 md:mr-18 xl:mr-20'>
                                <GiMoneyStack size={70} className='ch-icon'/>
                                <h3 className='mb-5 mt-5 text-[20px] md:text-2xl make-it-col-ch font-semibold'>Value for Money</h3>
                                <p className='w-[18rem] xl:w-[20rem] text-center text-col-ch text-[18px]'>
                                    Affordable plans designed to give you maximum benefits without compromising on quality, ensuring you achieve fitness goals within your budget.
                                </p>
                            </motion.div>
                            {/* icon 2 section */}
                            <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{delay:0.2, duration:0.5}} viewport={{once:true}}  className='flex flex-col justify-center items-center mr-0 md:mr-18 xl:mr-20 mt-10 md:mt-0 lg:mt-0'>
                                <CiMemoPad size={70} className='ch-icon'/>
                                <h3 className='mb-5 mt-5 text-[20px] md:text-2xl make-it-col-ch font-semibold'>Personal Coach</h3>
                                <p className='w-[18rem] text-center text-col-ch text-[18px]'>Get expert guidance and motivation from certified trainers who personalize every workout plan, helping you stay consistent and achieve real results.</p>
                            </motion.div>
                            {/* icon 3 section */}
                            <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{delay:0.4, duration:0.5}} viewport={{once:true}} className='flex flex-col justify-center items-center mt-10 md:-ml-15 lg:mt-0 lg:ml-0'>
                                <LuDumbbell size={70} className='ch-icon'/>
                                <h3 className='mb-5 mt-5 text-[20px] md:text-2xl make-it-col-ch font-semibold'>Equipment</h3>
                                <p className='w-[18rem] text-center text-col-ch text-[18px]'>Train with high-quality, modern fitness equipment built for safety and performance, giving you the best tools to support your fitness journey.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
