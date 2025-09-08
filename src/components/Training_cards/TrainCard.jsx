import React from 'react'
import { cardsData } from './cardsData';
import { motion } from "motion/react";
import './trainCard.css'
import { animate } from 'motion';

const TrainCard = () => {

    return (
        <>
            <section>
                <div id='TrainCard' className='container mx-auto mt-14 mb-14'>
                    {/* heading section */}
                    <div>
                        <motion.h1 initial={{
                            opacity: 0,
                            y: 100
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                            transition={{ duration: 0.5 }} viewport={{once:true}} className=' make-it-lg text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-14 px-6 md:px-10 lg:px-14 xl:px-0 text-center'>Training Programs</motion.h1>
                    </div>
                    {/* cards section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10 md:px-14 xl:px-0 cursor-pointer'>
                        {cardsData.map((data) => (
                            // image section
                            <motion.div
                            initial={{
                            opacity: 0,
                            y: 100
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                            transition={{
                                 duration: 0.5
                                  }}
                                  viewport={{once:true}}
                                  key={data.id} className='bg-white rounded-2xl h-[560px] w-[300px] 2xl:w-[350px] shadow-xl ch-scale'>
                                <img src={data.img} alt={data.title} className='h-[300px] w-[350px] object-cover rounded-tl-2xl rounded-tr-2xl' />
                                {/* text content section */}
                                <div>
                                    <h1 className='text-2xl text-center bg-change p-2'>{data.title}</h1>
                                    <p className='text-md text-center w-[18rem] 2xl:w-[21.5rem] font-normal text-black p-4 text-col-ch'>{data.desc}</p>
                                </div>
                                {/* learn more button section */}
                                <div className='flex justify-center items-center'>
                                    <button className='amk-bg-trans px-[10px] py-[8px] rounded font-bold'>Learn More</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrainCard
