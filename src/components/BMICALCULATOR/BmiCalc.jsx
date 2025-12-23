import React, { useState } from 'react';
import {underWeight} from './bmi'
import {overWeight} from './bmi'
import { motion } from "motion/react";
import './bim.css'
const BmiCalc = () => {

    const [weight, setWeight] = useState(60);
    const [height, setHeight] = useState(160);
    const [bmi, setBMI] = useState(null);
    const [category, setCategory] = useState('');
    const [showDietPlans, setShowDietPlans] = useState(false);

    const calculateBMI = () => {
        const heival = height / 100;
        const weiVal = weight / (heival * heival);
        setBMI(weiVal.toFixed(2));

        if (weiVal < 18.5) setCategory('Underweight');
        else if (weiVal < 24.9) setCategory('Normal weight');
        else if (weiVal < 29.9) setCategory('Overweight');
        else setCategory('Too much weight');

        setShowDietPlans(true);
    };
    return (
        <>
            <motion.h1 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5 }} viewport={{once:true}} className=' capitalize text-center text-2xl lg:text-3xl xl:text-5xl font-extrabold mt-20 text-gr-bl'>Calculate your bmi</motion.h1>
            <div className={`container mx-auto grid place-items-center mb-14 mt-10 cont-column ${
        showDietPlans ? 'grid-cols-3' : 'grid-cols-1'}`}>
                {/* diet plan 1 */}
                {showDietPlans && (
                    <div className="bg-white for-thsefi px-10 py-6 lg:p-8 xl:p-10 rounded-xl shadow-md h-[360px] w-[380px] lg:h-[400px] xl:h-[450px] lg:w-[300px] xl:w-[380px] add-animation">
                        {/* heading */}
                        <h3 className="uppercase text-center text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 tex-cha-to-he">Underweight</h3>
                            {/* list section */}
                            <ul className='flex flex-col justify-center gap-y-5 pl-10 lg:pl-10 xl:pl-12'>
                                {underWeight.map((item) => {
                                    return <li className=' list-disc text-xl xl:text-[20px] font-bold chan-tex-col' key={item.id}>{item.list}</li>
                                })}
                            </ul>
                    </div>
                )}
                {/* bmi calculator section */}
                <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5 }} viewport={{once:true}} className="bg-white for-thsefi p-10 lg:p-8 xl:p-10 my-10  lg:m-0 rounded-xl shadow-md h-[450px] w-[380px] lg:h-[480px] xl:h-[450px] lg:w-[300px] xl:w-[380px]">
                    {/* heading section */}
                    <h2 className=" capitalize text-center text-2xl lg:text-3xl xl:text-4xl font-bold  mb-8 md:mb-10 lg:mb-10 tex-cha-to-he">bmi Calculator</h2>

                    <label className="block mb-1">Weight: {weight} kg</label>
                    <input
                        type="range"
                        min="30"
                        max="150"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="w-full mb-12 custom-slider"
                    />

                    <label className="block mb-1">Height: {height} cm</label>
                    <input
                        type="range"
                        min="100"
                        max="200"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full mb-12 custom-slider slider"
                    />

                    <button
                        onClick={calculateBMI}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4 btn-ch-sc"
                    >
                        Calculate BMI
                    </button>

                    {bmi && (
                        <div className="mt-4 text-center">
                            <p>Your BMI: <strong>{bmi}</strong></p>
                            <p>Status: <strong className='color text-xl'>{category}</strong></p>
                        </div>
                    )}
                </motion.div>
                {/* diet plan 2 */}
                {showDietPlans && (
                    <div className="bg-white for-thsefi px-20 py-6 lg:p-8 xl:p-10 rounded-xl shadow-md h-[360px] w-[380px] lg:h-[400px] xl:h-[450px] lg:w-[300px] xl:w-[380px] add-animation">
                        <h3 className="uppercase text-center text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 tex-cha-to-he">Overweight</h3>
                        {/* list section */}
                            <ul className='flex flex-col justify-center gap-y-5 change-the-pad lg:pl-10 xl:pl-12'>
                                {overWeight.map((item) => {
                                    return <li className=' list-disc text-xl xl:text-[20px] font-bold chan-tex-col' key={item.id}>{item.list}</li>
                                })}
                            </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default BmiCalc
