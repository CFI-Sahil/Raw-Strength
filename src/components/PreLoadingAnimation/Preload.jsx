import React, { useEffect, useState } from 'react'
import { motion } from "motion/react";
import Dumbbell from '../../assets/health-dumbbell.png'
import './preloading.css'
const Preload = () => {


    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(false);
        }, 3200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen w-screen gap-6 relative'>

                {showOverlay && (
                    <motion.div initial={{ y: 0 }} animate={{ y: -1000 }} transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }} className='absolute top-0 left-0 flex justify-center items-center h-screen w-screen bg-black scale-z-90 gap-4'>
                        <motion.h1 initial={{ y: -1000, opacity: 0 }} animate={{ y: -30, opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }} className="text-white text-6xl font-bold">Welcome</motion.h1>
                        <motion.h1 initial={{ y: -1000, opacity: 0 }} animate={{ y: -30, opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} className="text-white text-6xl font-bold">To</motion.h1>
                    </motion.div>
                )}

                {/* main preloader section */}
                {!showOverlay && (
                    <>
                        <motion.div initial={{ y: 0 }} animate={{ y: -1000 }} transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }} className='absolute top-0 left-0 flex justify-center items-center h-screen w-screen scale-z-90'>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                {/* image motion */}
                                <motion.div
                                    initial={{ x: -1000, y: -50, opacity: 1 }}
                                    animate={{ x: -10, y: 0 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1, ease: "easeInOut" }}>
                                    <img src={Dumbbell} alt="dumbbell" className=' object-contain h-36 w-36' />
                                </motion.div>

                                {/* text sction */}
                                <div className='flex gap-4'>
                                    <motion.h1 initial={{ y: -1000, opacity: 1 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 14, duration: 3, delay: 0.4, ease: "easeOut" }} className='text-5xl md:text-6xl lg:text-8xl font-bold text-cha'>RAW</motion.h1>
                                    <motion.h1 initial={{ x: 1100, opacity: 1 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 85, damping: 14, duration: 3, delay: 0.6, ease: "easeOut" }} className='text-5xl md:text-6xl lg:text-8xl font-bold tex-nor'>STRENGTH</motion.h1>
                                </div>
                            </div>

                            {/* loading bar section */}
                            <motion.div initial={{ opacity: 1 }} animate={{rotateY: 360 }} transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }} className='flex justify-center items-center absolute bottom-40'>
                                <img src={Dumbbell} alt="dumbbell" className='object-contain h-16 w-16' />
                            </motion.div>
                        </motion.div >
                    </>
                )}

            </div>
        </>
    )
}

export default Preload;