import React, { useState } from 'react';
import { NavbarMenu } from './data'
import Logo from '../../assets/Logo.png'
import { FaDumbbell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
import { motion } from 'motion/react'
import './navbar.css';
const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            <motion.nav initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className='sticky top-0 z-50 w-full bg-white shadow-md'>
                <div className='container px-[22px] md:px-10 lg:px-[3.2rem] flex items-center justify-between py-6 xl:px-0 md:mx-auto'>
                    {/* logo section */}
                    <div className="flex items-center font-bold text-2xl gap-2 uppercase cursor-pointer">
                        {/* <FaDumbbell size={32} />
                        <p className="col-ch">raw <span>strength</span></p> */}

                        <img src={Logo} alt="Logo" className=' bg-cover w-50 md:w-40 lg:w-60'/>
                    </div>
                    {/* menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex gap-10 items-center'>
                            {NavbarMenu
                                .filter(item => item.id <= 4)  // Only ids 1,2,3,4
                                .map(item => (
                                    <li className='men-tex' key={item.id}>
                                        <Link
                                            activeClass='active'
                                            to={item.link}
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            className='capitalize inline-block cursor-pointer text-[18px] lg:text-[20px]'
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* button GEt Satrted section */}
                    <div>
                        {NavbarMenu
                            .filter(item => item.id === 5)  // Only "Get Started"
                            .map(item => (
                                <button className='men-tex' key={item.id}>
                                    <Link
                                        activeClass='active'
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        className='hidden md:block capitalize cursor-pointer text-[16px] lg:text-[18px] px-2 py-1 rounded bg-col'
                                    >
                                        {item.title}
                                    </Link>
                                </button>
                            ))}
                    </div>

                    {/* mobile hamburger section */}
                    <div className='md:hidden'>
                        <RxHamburgerMenu size={30} onClick={() => setOpen(!open)} />
                    </div>
                </div>
                {/* mobile menu section in burger */}
                <div className={`md:hidden ${open ? 'fixed w-full overflow-hidden flex flex-col' : 'hidden'} z-50 right-0 top-0 bottom-0 transition-all mob-men-bg`} onClick={() => setOpen(false)}>
                    
                    <div className='flex justify-end px-10 pt-10'>
                        <RxCross2 className='cursor-pointer' style={{ color: 'white', fontSize: "40px"}} onClick={() => setOpen(false)} />
                    </div>
                    <ul className='flex flex-col justify-center h-1/2 items-center gap-2 mt-5'>
                        {NavbarMenu.map((item) => {
                            return <li key={item.id}>
                                <Link activeClass='active' to={item.link} spy={true} smooth={true} offset={-100} duration={500} className="capitalize inline-block px-4 py-2 w-full rounded-2xl text-xl md:text-2xl mob-men-font mb-2" onClick={() => { setOpen(false) }}>{item.title}</Link>
                            </li>
                        })}

                    </ul>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar
