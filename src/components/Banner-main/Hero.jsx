import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Banner1 from '../../assets/Banner_1.jpg';
import Banner2 from '../../assets/Banner_2.jpg';
import Banner3 from '../../assets/Banner_3.jpg';
import BannerMOb1 from '../../assets/Banner_1_Responsive.jpg';
import BannerMOb2 from '../../assets/Banner_2_Responsive.jpg';
import BannerMOb3 from '../../assets/Banner_3_Responsive.jpg';

import './hero.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const [mobile, setMobile] = useState(window.innerWidth <= 425);

    useEffect(() => {
        const handleSize = () => {
            setMobile(window.innerWidth <= 425);
        };
        handleSize();
        window.addEventListener('resize', handleSize);
        return () => window.removeEventListener('resize', handleSize);
    }, []);

    const banners = mobile
        ? [BannerMOb1, BannerMOb2, BannerMOb3]
        : [Banner1, Banner2, Banner3];

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <section>
            <div className="container mx-auto px-6 md:p-10 lg:p-12 xl:p-0 my-10 md:my-0 md:mt-0 lg:mt-2 xl:mt-14 banner-slider">
                <Slider {...sliderSettings}>
                    {banners.map((banner, index) => (
                        <div key={index}>
                            <img className="banner-image" src={banner} alt={`Banner ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Hero;
