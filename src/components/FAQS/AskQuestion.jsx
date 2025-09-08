import React from "react";
import { FrequentAskQuest } from "./FrequentData";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import "./fredata.css";
import { delay } from "motion";

const AskQuestion = () => {

  const cardanivariants = [
    {
      initial:{
        opacity:0,
        y:-100
      },
      whileInView:{
        opacity:1,
        y:0
      },
      transition:{
        duration: 0.5,
      },
      viewport:{
        once:true,
        amount:0.4
      }
    },
    {
      initial:{
        opacity:0,
        y:100
      },
      whileInView:{
        opacity:1,
        y:0
      },
      transition:{
        duration: 0.5,
        delay:0.3
      },
      viewport:{
        once:true
      }
    },
    {
      initial:{
        opacity:0,
        y:-100
      },
      whileInView:{
        opacity:1,
        y:0
      },
      transition:{
        duration: 0.5,
        delay:0.4
      },
      viewport:{
        once:true,
        amount:0.4
      }
    }

  ]
  return (
    <section>
      <div className="container mx-auto mb-14">
        {/* heading section */}
                <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5 }} viewport={{once:true}}>
                    <h1 className=' text-center make-it-lg capitalize text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 md:mb-10 lg:mb-14 px-6 md:px-10 lg:px-14 xl:px-0'>FAQS, Expert Answer</h1>
                </motion.div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-14 lg:gap-24 xl:gap-20 md:px-10 lg:px-14 xl:px-0">
        {FrequentAskQuest.map((data,index) =>(
            <motion.div initial={cardanivariants[index].initial} whileInView={cardanivariants[index].whileInView} transition={cardanivariants[index].transition}
            viewport={cardanivariants[index].viewport} key={data.id} className="bg-white for-320-px h-[600px] w-[320px] lg:w-[400px] 2xl:w-[465px] shadow-xl">
                {/* image section */}
                <div className="flex flex-col justify-center items-center">
              <img src={data.img} alt={data.title} className="h-[300px] w-[320px] lg:w-[400px] 2xl:w-[465px] object-cover object-top" />
              </div>
              {/* heading section */}
              <div className="red-pad p-[1rem] lg:p-[1.5rem] 2xl:p-[2rem]">
              <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl fa-font-head font-medium mb-4">{data.title}</h2>
              {/* paragraph section */}
              <p className="faq-desc text-lg mb-3">{data.desc}</p>
              </div>
                {/* text section */}
              <div className="faq-link">
                <a className="flex items-center gap-x-2 capitalize font-semibold" href="">{data.text} <span><FaArrowRightLong /></span></a>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
