import React from 'react'
import ManAbt from '../../assets/man2.png'
import { motion } from "motion/react";
import './aboutMe.css'
const AboutMe = () => {
    return (
        <>
            <main>
                {/* about me image section */}
                <motion.div id='About' initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className=" container mx-auto grid lg:grid-cols-2 items-center md:mt-2 lg:mt-0 xl:mt-14 xl:w-full lg:h-[400px] bg-white rounded-[10px] relative overflow-hidden  px-6 md:px-15 w-[90%] xl:px-40 shadow-lg">
                    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4
                        }}
                        className='flex justify-center py-8'>
                        <img src={ManAbt} alt="Man image" className='h-[200px] md:h-[250px] xl:h-[350px] w-[200px] md:w-[250px] xl:w-[350px] rounded-[100%] bg-gray-200 object-cover object-top' />
                    </motion.div>
                    {/* about me content section */}
                    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                            delay: 0.6
                        }} className='md:leading-[25px] mak-tex-g text-center lg:text-start'>
                        <h1 className='mak-it-pri text-4xl md:text-6xl mb-4 font-bold'>About Me</h1>
                        <h3 className='text-2xl md:text-3xl mb-2 font-bold'>Certified Fitness Trainer</h3>
                        <p className='text-[18px] pb-8'>I specialize in strength training, weight management, and functional workouts tailored to your goals.
                            My mission is to make fitness simple, enjoyable, and sustainable for everyone.
                            Let’s work together to unlock your true potential and transform your lifestyle.</p>
                    </motion.div>
                </motion.div>
            </main>
        </>
    )
}

export default AboutMe
