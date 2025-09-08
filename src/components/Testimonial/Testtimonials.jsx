import React from 'react'
import { testimonialsDataOfPeople } from './testiData';
import {motion} from 'motion/react';
import './testimony.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testtimonials = () => {

    const setting = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 4000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };


    return (
        <>
            <section>
                <div className="container mx-auto mb-14">
                    {/* heading section */}
                    <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5}} viewport={{once:true}} className='text-center'>
                        <h1 className=' capitalize text-center text-2xl lg:text-4xl xl:text-5xl font-extrabold head-tex mx-auto'>Why Clients Choose My Training</h1>
                    </motion.div>
                    {/* Testimonial card section */}
                    <div className='testimonial-slider'>
                        <Slider {...setting}>
                            {testimonialsDataOfPeople.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 my-10 rounded-xl bg-ch-pr-li cursor-grab active:cursor-grabbing'>
                                            {/* Head name section */}
                                            <div className='text-center text-xl md:text-[18px] lg:text-[20px] font-bold change-ter'>
                                                <h3>{item.name}</h3>
                                            </div>
                                            {/* content section */}
                                            <div>
                                                <p className='text-center text-xl xl:text-[18px] change-tex-to'>{item.feedback}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testtimonials