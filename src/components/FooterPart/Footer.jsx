import React from 'react';
import LogoWhite from '../../assets/Logo_White.png'
import './footer.css'

const Footer = () => {
    return (
        <>
            <section>
                <div id='Footer' className='mt-20'>
                    <div className='bg-bl-foot w-full md:h-[52vh] lg:h-[50vh] rounded-tl-xl rounded-tr-xl flex flex-col md:flex-row justify-between items-start px-10 py-10 md:px-20 md:py-16 lg:py-20 xl-py-24 2xl:py-30 flex-wrap gap-8'>
                        {/* image logo section */}
                        <div className="flex items-center font-bold text-2xl gap-2 uppercase cursor-pointer ml-12 md:ml-50 lg:ml-0">
                            {/* <FaDumbbell size={32} />
                            <p className="col-ch">raw <span>strength</span></p> */}
                            <img src={LogoWhite} alt="Logo" className=' bg-cover w-60'/>
                        </div>
                        {/* section 1 */}
                        <div className='text-[16px] tex-con-foot mt-0 ml-0 md:mt-[5rem] md:ml-[-32rem] lg:mt-0 lg:ml-0'>
                            <h4 className='text-[18px] font-bold tex-he-foot'>Quick Links</h4>
                            <hr className='mb-6 mt-2 w-25 text-white-600'/>
                            <div className='text-[16px] tex-con-foot'>
                            <p className='mb-4'>Home</p>
                            <p className='mb-4'>About Us</p>
                            <p className='mb-4'>Training</p>
                            <p className='mb-4'>Contact</p>
                            </div>
                        </div>
                        {/* section 2 */}
                        <div className='text-[16px] tex-con-foot mt-[-15.8rem] ml-[14rem] md:ml-[4rem] md:mt-[5rem] lg:mt-0 lg:ml-0'>
                            <h4 className='text-[18px] font-bold tex-he-foot'>Policies</h4>
                            <hr className='mb-6 mt-2 w-20 text-white-600'/>
                            <div className='text-[16px] tex-con-foot'>
                            <p className='mb-4'>Privacy Policy</p>
                            <p className='mb-4'>Term & Condition</p>
                            <p className='mb-4'>FAQs</p>
                            <p className='mb-4'>Services</p>
                            </div>
                        </div>
                        {/* section 3 */}
                        <div className='text-[16px] tex-con-foot md:mt-[5rem] md:ml-[3rem] lg:mt-0'>
                            <h4 className='text-[18px] font-bold tex-he-foot'>Shop By Category</h4>
                            <hr className='mb-6 mt-2 w-35 text-white-600'/>
                            <div className='text-[16px] tex-con-foot'>
                            <p className='mb-4'>Commercial Use</p>
                            <p className='mb-4'>Strength</p>
                            <p className='mb-4'>Treadmills</p>
                            <p className='mb-4'>Weight & Bars</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer