import React from 'react';
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { motion } from "motion/react";
import './benefit.css';
const Benefit = () => {
  return (
    <>
      <section>
        <div className='container mx-auto pt-4 px-6 md:px-8 lg:px-10 xl:px-0 mb-14'>
          {/* offer container */}
          <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{ type:"spring", stiffness:300, damping:8, duration:0.5, delay:0.3}} viewport={{once:true}} className='w-full lg:h-[55vh] 2xl:h-[50vh] bg-white rounded-2xl shadow-xl p-10 md:p-10 lg:p-16 lg:px-0'>
            {/* offer heading section */}
            <div className='flex justify-center text-center'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold col-ch-idk mb-10'>What Benefits You Will Get</h1>
            </div>
            {/* offer section 1 */}
            <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3'>

              {/* icon texet section */}
              <div className='flex flex-col justify-center items-center'>
                <GiWeightLiftingUp size={70} className='my-icon' />
                <h3 className='text-[20px] md:text-2xl lg:text-[1.3rem] xl:text-2xl font-semibold mt-5 mb-5 text-[#313131]'>Personalized Training Plans</h3>
                <p className='w-[16rem] xl:w-[18rem] text-center text-chan-to-som text-[18px]'>Custom workout routines tailored to your goals, fitness level, and lifestyle for faster, sustainable results.</p>
              </div>

              {/* offer section 2 */}

              {/* icon texet section */}
              <div className='flex flex-col justify-center items-center mt-6 md:mt-0'>
                <GiMeal size={70} className='my-icon xl:relative xl:top-[-16px]' />
                <h3 className='text-[20px] md:text-2xl lg:text-[1.3rem] xl:text-2xl font-semibold mt-5 mb-5 text-[#313131] xl:relative xl:top-[-13px]'>Nutrition Guidance</h3>
                <p className='w-[16rem] xl:w-[18rem] text-center text-chan-to-som text-[18px] xl:relative xl:top-[-12px]'>Easy-to-follow meal plans and diet tips designed to fuel your workouts and improve overall health.</p>
              </div>

              {/* offer section 3 */}

              {/* icon texet section */}
              <div className='flex flex-col justify-center items-center mt-6 lg:mt-0 '>
                <FaChartLine size={70} className='my-icon' />
                <h3 className='text-[20px] md:text-2xl lg:text-[1.3rem] xl:text-2xl font-semibold mt-5 mb-5 text-[#313131] text-center'>Progress Tracking & Support</h3>
                <p className='w-[16rem] xl:w-[18rem] text-center text-chan-to-som text-[18px]'>Regular assessments, feedback, and motivation to ensure you stay on track and achieve your fitness journey.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Benefit

