

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { TbMessage } from 'react-icons/tb';
import { TfiWorld } from 'react-icons/tfi';
import image from '../../../../assets/Rectangle 44.png';
import image2 from '../../../../assets/Rectangle 45.png';
import frame from '../../../../assets/Frame.png';




const Features = () => {
    useEffect(() => {
        AOS.init({}); // Initialize AOS

        return () => {
            AOS.refresh(); // Refresh AOS on component unmount
        };
    }, []);

    return (
        <div className="md:mt-[130px] mt-[80px] w-full max-w-[1280px] mx-auto">
            <div className='px-10'>
                <h1 className="heading text-center">Our Features</h1>
                <p className="subText text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
            </div>
            <div className='md:flex items-center justify-between gap-[124px] mt-[40px]'>
                <div className='relative px-5'  >
                    <div>
                        <div className='md:w-[400px] '>
                            <img data-aos='fade-right' data-aos-delay="50" data-aos-duration='2000' className='w-full  h-full' src={image} alt="" />
                            <img data-aos='fade-left' data-aos-delay="50" data-aos-duration='2000' className='absolute top-0  w- h-full ' src={image2} alt="" />
                        </div>
                    </div>
                    <div
                        data-aos='zoom-in-up' data-aos-delay="50" data-aos-duration='3000'
                        className='h-[200px] w-[200px] bg-gradient-to-b from-red-500 to-blue-900 shadow-lg rounded-full flex flex-col justify-center items-center absolute top-[170px] right-[20px] md:top-[110px] md:right-[-90px] text-white'>
                        <p>Start Now For</p>
                        <h4>FREE</h4>
                        <p>7 Day Trail</p>
                    </div>
                </div>

                {/* text/right side */}

                <div className='space-y-[40px] px-5 md:mt-0 mt-14 '>
                    <div
                        data-aos='fade-right' data-aos-delay="200" data-aos-duration='2000'
                        className='flex items-center gap-[39px] text-gray-600
                     '>
                        <div    
                            className='bg-[#C64EF2] h-[81px] w-[81px] rounded-full flex justify-center items-center'>
                            <TbMessage className='text-[38px] text-white' />
                        </div>
                        <div>
                            <h3 className='text-[24px] font-medium'>Private Chat</h3>
                            <p className='subText'>Dating is a stage of romantic <br />  relationships in which two</p>
                        </div>
                    </div>
                    <div
                        data-aos='fade-left' data-aos-delay="200" data-aos-duration='2000'
                        className='flex items-center gap-[39px] text-gray-600'>
                        <div className='bg-[#33357D] h-[81px] w-[81px] rounded-full flex justify-center items-center'>
                            <img src={frame} className='h-[38px] w-[38px] text-white' />
                        </div>
                        <div>
                            <h3 className='text-[24px] font-medium'>Facebook Login</h3>
                            <p className='subText'>Dating is a stage of romantic <br />relationships in which two</p>
                        </div>
                    </div>
                    <div
                        data-aos='fade-right' data-aos-delay="200" data-aos-duration='2000'
                        className='flex items-center gap-[39px] text-gray-600'>
                        <div className='bg-[#FF3D4F] h-[81px] w-[81px] rounded-full flex justify-center items-center'>
                            <TfiWorld className='text-[38px] text-white' />
                        </div>
                        <div>
                            <h3 className='text-[24px] font-medium'>Discovery Setting</h3>
                            <p className='subText'>Dating is a stage of romantic  <br />relationships in which two</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;