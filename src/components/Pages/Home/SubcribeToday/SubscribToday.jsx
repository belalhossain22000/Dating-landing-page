import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState } from 'react';
import star from '../../../../assets/Star 2.png';
import { HiX } from 'react-icons/hi';
import { BsCheckLg } from 'react-icons/bs';
import Reveals from '../../Reveals/Reveals';



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
                <Reveals>
                    <h1 className='text-[40px] md:text-[48px] font-bold text-center mb-5'>Subscribe Today</h1>
                </Reveals>
                <Reveals>
                    <p className='subText text-center'>Dating is a stage of romantic relationships in which two <br /> individuals engage in an activity together,</p>
                </Reveals>
            </div>
            {/* butoon  */}

            <div className="flex justify-center items-center gap-[38px]   rounded-[30px] border-[1px] w-[212px] mx-auto h-[60px] mt-[40px] py-[5px] px-[7px]">
                <button onClick={() => setActive(!active)} className={` ${!active ? "bg-[#FF3D4F] py-[11px] px-[22px] rounded-[30px] text-white hover:bg-white  hover:text-[#FF6E7B] hover:border-[1px] hover:border-[#FF6E7B]  " : 'text-[#FF6E7B]'} `} >Monthly</button>
                <button onClick={() => setActive(!active)} className={` ${active ? " bg-[#FF3D4F] py-[11px] px-[22px] rounded-[30px] text-white hover:bg-white  hover:text-[#FF6E7B] hover:border-[1px] hover:border-[#FF6E7B] " : 'text-[#FF6E7B]'}   `}>Yearly</button>
            </div>

            {/* card */}
            {/* monthly */}
            {!active && <div className='md:flex items-center justify-center space-y-5 md:ml-10 lg:ml-0 gap-5 lg:gap-[100px] xl:gap-[322px]'>
                {/* ls card */}
                <div className='mt-[40px] flex flex-col-reverse md:flex-row  lg:gap-[56px] '>
                    <div className='h-[400px] w-[275px] mx-auto md:mx-0 bg-[#FFF] rounded-[50px] px-[23px] py-[61px] ' style={{ boxShadow: "0px 30px 60px 0px rgba(238, 68, 68, 0.15)" }}>
                        <Reveals>
                            <h3 className='text-[#33357D] text-2xl font-semibold mb-[10px]'>Premium </h3>
                        </Reveals>
                        <Reveals>
                            <p className='text-[#5B5B5B] text-lg font-normal'>Dating is a stage of romantic</p>
                        </Reveals>
                        <div className='mt-[20px] space-y-[10px]'>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                        </div>

                        <button className=' hover:bg-white  hover:text-[#FF6E7B] hover:border-[1px] hover:border-[#FF6E7B]  bg-[#FF3D4F] text-white px-[32px] py-[20px] rounded-[30px] mt-[20px]'>
                            Suscrib Now
                        </button>


                    </div>
                    {/* star */}

                    <div className='flex justify-center md:justify-start md:mb-0 mb-5'>
                        <div className='relative h-[110px] w-[110px] '>
                            <img src={star} alt="" className='h-[110px] w-[110px]' />
                            <div className='text-white absolute top-7 left-8 h-[110px] w-[110px]'>
                                <h1 className='text-2xl font-bold'>$70</h1>
                                <p className='text-sm font-normal'>Monthly</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rs card */}
                <div className='flex flex-col-reverse md:flex-row lg:gap-[56px]'>
                    <div className='h-[400px] w-[275px] mx-auto md:mx-0 bg-[#FFF] rounded-[50px] px-[23px] py-[61px]' style={{ boxShadow: "0px 30px 60px 0px rgba(238, 68, 68, 0.15)" }}>
                        <Reveals>
                            <h3 className='text-[#FF3D4F] text-2xl font-semibold mb-[10px]'>Standard </h3>
                        </Reveals>
                        <Reveals>
                            <p className='text-[#5B5B5B] text-lg font-normal'>Dating is a stage of romantic</p>
                        </Reveals>
                        <div className='mt-[20px] space-y-[10px]'>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <HiX className='bg-[#ED3E3E] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                        </div>

                        <button className='hover:bg-white  hover:text-[#FF6E7B] hover:border-[1px] hover:border-[#FF6E7B]  bg-[#FF3D4F] text-white px-[32px] py-[20px] rounded-[30px] mt-[20px]'>
                            Suscrib Now
                        </button>

                    </div>
                    <div className='flex justify-center md:justify-start mt-5 md:mt-0'>
                        <div className=' h-[110px] w-[110px]'>

                            <div className=' h-[110px] w-[110px]'>
                                <h1 className='text-2xl font-bold'>$70</h1>
                                <p className='text-sm font-normal'>Monthly</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}

            {/* yearly */}
            {active && <div className='md:flex items-center justify-center space-y-5 md:ml-10 lg:ml-0 gap-5 lg:gap-[100px] xl:gap-[322px]'>
                {/* ls card */}
                <div className='mt-[40px] flex flex-col-reverse md:flex-row lg:gap-[56px]'>
                    <div className='h-[400px] w-[275px] mx-auto md:mx-0 bg-[#FFF] rounded-[50px] px-[23px] py-[61px] ' style={{ boxShadow: "0px 30px 60px 0px rgba(238, 68, 68, 0.15)" }}>
                        <Reveals>
                            <h3 className='text-[#33357D] text-2xl font-semibold mb-[10px]'>Premium </h3>
                        </Reveals>
                        <Reveals>
                            <p className='text-[#5B5B5B] text-lg font-normal'>Dating is a stage of romantic</p>
                        </Reveals>
                        <div className='mt-[20px] space-y-[10px]'>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                        </div>

                        <button className='hover:bg-white  hover:text-[#FF6E7B] hover:border-[1px] hover:border-[#FF6E7B]  bg-[#FF3D4F] text-white px-[32px] py-[20px] rounded-[30px] mt-[20px]'>
                            Suscrib Now
                        </button>


                    </div>
                    {/* star */}
                    <div className='flex justify-center md:justify-start my-5 md:my-0'>
                        <div className='relative h-[110px] w-[110px]'>
                            <img src={star} alt="" className='h-[110px] w-[110px]' />
                            <div className='text-white absolute top-7 left-8 h-[110px] w-[110px]'>
                                <h1 className='text-2xl font-bold'>$70</h1>
                                <p className='text-sm font-normal'>Yearly</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rs card */}
                <div className='flex flex-col-reverse md:flex-row lg:gap-[56px]'>
                    <div className='h-[400px] w-[275px] mx-auto md:mx-0 bg-[#FFF] rounded-[50px] px-[23px] py-[61px]' style={{ boxShadow: "0px 30px 60px 0px rgba(238, 68, 68, 0.15)" }}>
                        <Reveals>
                            <h3 className='text-[#FF3D4F] text-2xl font-semibold mb-[10px]'>Standard </h3>
                        </Reveals>
                        <Reveals>
                            <p className='text-[#5B5B5B] text-lg font-normal'>Dating is a stage of romantic</p>
                        </Reveals>
                        <div className='mt-[20px] space-y-[10px]'>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <BsCheckLg className='bg-[#368977] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                            <Reveals>
                                <p className='flex items-center gap-[13px]'> <span className=''> <HiX className='bg-[#ED3E3E] text-white h-[22px] w-[22px] rounded-full  p-[2px]' /> </span> Single User</p>
                            </Reveals>
                        </div>

                        <button className='hover:bg-white  hover:text-[#FF6E7B] hover:border-[1px] hover:border-[#FF6E7B]  bg-[#FF3D4F] text-white px-[32px] py-[20px] rounded-[30px] mt-[20px]'>
                            Suscrib Now
                        </button>

                    </div>
                    <div className='flex justify-center md:justify-start mt-6 md:mt-0'>
                        <div data-aos='fade-down' data-aos-delay="50" data-aos-duration='2000' className=' h-[110px] w-[110px]'>

                            <div className=' h-[110px] w-[110px]'>
                                <h1 className='text-2xl font-bold'>$70</h1>
                                <p className='text-sm font-normal'>Yearly</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}
        </div>
    );
};

export default SubscribToday;