import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState } from 'react';
import star from '../../../../assets/Star 2.png';
import { HiX } from 'react-icons/hi';
import { BsCheckLg } from 'react-icons/bs';


const SubscribToday = () => {

    const [active, setActive] = useState(false);
    useEffect(() => {
        AOS.init({}); // Initialize AOS

        return () => {
            AOS.refresh(); // Refresh AOS on component unmount
        };
    }, []);



    return (
        <div className="md:mt-[130px] mt-[80px] w-full max-w-[1280px] mx-auto bg-red-70">
            {/* heading */}
            <div>
                <h1 data-aos='fade-right' data-aos-delay="50" data-aos-duration='2000' className='heading text-center mb-5'>Subscribe Today</h1>
                <p data-aos='fade-left' data-aos-delay="50" data-aos-duration='3000' className='subText text-center'>Dating is a stage of romantic relationships in which two <br /> individuals engage in an activity together,</p>
            </div>
            {/* butoon  */}
            <div data-aos='zoom-in-up' data-aos-delay="50" data-aos-duration='2000' className="flex justify-center items-center gap-[38px]   rounded-[30px] border-[1px] w-[212px] mx-auto h-[60px] mt-[40px] py-[5px] px-[7px]">
                <button onClick={() => setActive(!active)} className={` ${!active ? "bg-[#FF3D4F] py-[11px] px-[22px] rounded-[30px] text-white " : 'text-[#FF6E7B]'} `}>Monthly</button>
                <button onClick={() => setActive(!active)} className={` ${active ? " bg-[#FF3D4F] py-[11px] px-[22px] rounded-[30px] text-white " : 'text-[#FF6E7B]'} `}>Yearly</button>
            </div>
            {/* card */}
            {/* monthly */}
            {!active && <div className='md:flex items-center justify-center space-y-5 md:gap-[100px] lg:gap-[322px]'>
                {/* ls card */}
                <div className='mt-[40px] flex md:gap-[56px] '>
                    <div data-aos='flip-down' data-aos-delay="50" data-aos-duration='2000' className='h-[400px] w-[275px] mx-auto md:mx-0 bg-[#FFF] rounded-[50px] px-[23px] py-[61px] ' style={{ boxShadow: "0px 30px 60px 0px rgba(238, 68, 68, 0.15)" }}>
                        <h3 className='text-[#33357D] text-2xl font-semibold mb-[10px]'>Premium </h3>
                        <p className='text-[#5B5B5B] text-lg font-normal'>Dating is a stage of romantic</p>
                        <div className='mt-[20px] space-y-[10px]'>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                        </div>
                        <button className='bg-[#FF3D4F] text-white px-[32px] py-[20px] rounded-[30px] mt-[20px]'>
                            Suscrib Now
                        </button>

                    </div>
                    {/* star */}
                    <div data-aos='zoom-in-up' data-aos-delay="50" data-aos-duration='2000' className='relative h-[110px] w-[110px] '>
                        <img src={star} alt="" className='h-[110px] w-[110px]' />
                        <div className='text-white absolute top-7 left-8 h-[110px] w-[110px]'>
                            <h1 className='text-2xl font-bold'>$70</h1>
                            <p className='text-sm font-normal'>Monthly</p>
                        </div>
                    </div>
                </div>
                {/* rs card */}
                <div className='flex md:gap-[56px]'>
                    <div data-aos='flip-down' data-aos-delay="50" data-aos-duration='2000' className='h-[400px] w-[275px] mx-auto md:mx-0 bg-[#FFF] rounded-[50px] px-[23px] py-[61px]' style={{ boxShadow: "0px 30px 60px 0px rgba(238, 68, 68, 0.15)" }}>
                        <h3 className='text-[#FF3D4F] text-2xl font-semibold mb-[10px]'>Standard </h3>
                        <p className='text-[#5B5B5B] text-lg font-normal'>Dating is a stage of romantic</p>
                        <div className='mt-[20px] space-y-[10px]'>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            <p className='flex items-center gap-[13px]'> <span className=''> <HiX className='bg-[#ED3E3E] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                        </div>
                        <button className='bg-[#FF3D4F] text-white px-[32px] py-[20px] rounded-[30px] mt-[20px]'>
                            Suscrib Now
                        </button>
                    </div>
                    <div data-aos='zoom-in-up' data-aos-delay="50" data-aos-duration='2000' className=' h-[110px] w-[110px]'>
                        
                        <div className=' h-[110px] w-[110px]'>
                            <h1 className='text-2xl font-bold'>$70</h1>
                            <p className='text-sm font-normal'>Monthly</p>
                        </div>
                    </div>

                </div>
            </div>}

            {/* yearly */}
            {active && <div className='md:flex items-center justify-center space-y-5 md:gap-[100px] lg:gap-[322px]'>
                {/* ls card */}
                <div className='mt-[40px] flex md:gap-[56px]'>
                    <div className='h-[400px] w-[275px] mx-auto md:mx-0 bg-[#FFF] rounded-[50px] px-[23px] py-[61px] ' style={{ boxShadow: "0px 30px 60px 0px rgba(238, 68, 68, 0.15)" }}>
                        <h3 className='text-[#33357D] text-2xl font-semibold mb-[10px]'>Premium </h3>
                        <p className='text-[#5B5B5B] text-lg font-normal'>Dating is a stage of romantic</p>
                        <div className='mt-[20px] space-y-[10px]'>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                        </div>
                        <button className='bg-[#FF3D4F] text-white px-[32px] py-[20px] rounded-[30px] mt-[20px]'>
                            Suscrib Now
                        </button>

                    </div>
                    {/* star */}
                    <div className='relative h-[110px] w-[110px]'>
                        <img src={star} alt="" className='h-[110px] w-[110px]' />
                        <div className='text-white absolute top-7 left-8 h-[110px] w-[110px]'>
                            <h1 className='text-2xl font-bold'>$70</h1>
                            <p className='text-sm font-normal'>Yearly</p>
                        </div>
                    </div>
                </div>
                {/* rs card */}
                <div className='flex md:gap-[56px]'>
                    <div className='h-[400px] w-[275px] mx-auto md:mx-0 bg-[#FFF] rounded-[50px] px-[23px] py-[61px]' style={{ boxShadow: "0px 30px 60px 0px rgba(238, 68, 68, 0.15)" }}>
                        <h3 className='text-[#FF3D4F] text-2xl font-semibold mb-[10px]'>Standard </h3>
                        <p className='text-[#5B5B5B] text-lg font-normal'>Dating is a stage of romantic</p>
                        <div className='mt-[20px] space-y-[10px]'>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            <p className='flex items-center gap-[13px]'> <span className=''> <HiX className='bg-[#ED3E3E] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                        </div>
                        <button className='bg-[#FF3D4F] text-white px-[32px] py-[20px] rounded-[30px] mt-[20px]'>
                            Suscrib Now
                        </button>
                    </div>
                    <div className=' h-[110px] w-[110px]'>
                        
                        <div className=' h-[110px] w-[110px]'>
                            <h1 className='text-2xl font-bold'>$70</h1>
                            <p className='text-sm font-normal'>Yearly</p>
                        </div>
                    </div>

                </div>
            </div>}
        </div>
    );
};

export default SubscribToday;