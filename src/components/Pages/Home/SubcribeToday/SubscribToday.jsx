

import { useState } from 'react';
import star from '../../../../assets/Star 2.png';
import { HiX } from 'react-icons/hi';
import { BsCheckLg } from 'react-icons/bs';


const SubscribToday = () => {

    const [active, setActive] = useState(false);

    const handleActiveBtn = () => {
        setActive(!active);
    };

    return (
        <div className=" mt-[80px] md:mt-[130px] md:w-[1172px] w-full mx-auto">
            <h1 className="heading px-5 text-center">Subscribe Today</h1>
            <p className="subText text-center px-5">Dating is a stage of romantic relationships in which two <br /> individuals engage in an activity together,</p>
            <div className="w-[190px] h-[60px] mx-auto mt-[40px] border-[1px] rounded-[30px] border-[#DDD] flex justify-center items-center gap-[15px]">

                <button
                    className={`${!active ? 'bg-[#FF3D4F] text-white px-[23px] py-[10px] rounded-[30px] ' : 'text-[#FF3D4F]'}`}
                    onClick={handleActiveBtn}
                >
                    Monthly
                </button>
                <button
                    className={`${active ? 'bg-[#FF3D4F] px-[23px] py-[10px] rounded-[30px] text-white' : 'text-[#FF3D4F]'}`}
                    onClick={handleActiveBtn}
                >
                    Yearly
                </button>

            </div>
            {/* card section div  */}
            <div className='mt-[35px] px-10 space-y-10 md:space-y-0 md:flex items-center justify-between gap-[322px]'>
                <div className={`flex gap-[322px] items-center ${active ? "hidden" : ""}`}>
                    <div className={`flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-5 md:gap-[56px]`} >
                        <div className="w-[275px] h-[] rounded-[50px] bg-[#FFF] pt-[45px] px-[22px] pb-[65px] "
                            style={{
                                borderRadius: '30px',
                                boxShadow: '0px 30px 60px 0px rgba(238, 68, 68, 0.15)',
                            }}
                        >
                            <h3 className="text-[24px] font-[500px] text-[#33357D]">Premium </h3>
                            <p className="subText text-[#5B5B5B]">Dating is a stage of romantic</p>
                            <ul className="list-disc subText text-[#5B5B5B] my-[20px] space-y-[10px]">
                                <li className="flex gap-[13px] items-center"> <span className="text-white inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" > <BsCheckLg/>  </span>Single User</li>
                                <li className="flex gap-[13px] items-center"> <span className="text-white inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" > <BsCheckLg/>  </span>Single User</li>
                                <li className="flex gap-[13px] items-center"> <span className="text-white inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" > <BsCheckLg/>  </span>Single User</li>
                            </ul>
                            <button className="px-[32px] py-[20px] text-white rounded-[30px] bg-red-500">Subscribe Now</button>
                        </div>
                        <div className='text-white relative'>
                            <img className='h-[110px] w-[110px]' src={star} alt="" />
                            <div className='absolute top-6 right-6 md:top-6 md:right-6'>
                                <h2 className='text-[24px] font-bold'>$70</h2>
                                <p className='text-[14px] font-normal'>Monthly</p>
                            </div>

                        </div>
                    </div>
                    <div className={`flex md:gap-[56px] justify-center -ml-8 md:ml-0 `}>
                        <div className="w-[275px] h-[] rounded-[50px] bg-[#FFF] pt-[45px] px-[22px] pb-[65px] "
                            style={{
                                borderRadius: '30px',
                                boxShadow: '0px 30px 60px 0px rgba(238, 68, 68, 0.15)',
                            }}
                        >
                            <h3 className="text-[24px] font-[500px] mb-[10px] text-[#FF3D4F]">Standard </h3>
                            <p className="subText text-[#5B5B5B]">Dating is a stage of romantic</p>
                            <ul className="list-disc subText text-[#5B5B5B] my-[20px] space-y-[10px]">
                                <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full text-white" > <BsCheckLg/> </span>Single User</li>
                                <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full text-white" > <BsCheckLg/> </span>Single User</li>
                                <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#ED3E3E] p-1  rounded-full text-white" > <HiX /> </span>Multi users full access</li>
                            </ul>
                            <button className="px-[32px] py-[20px] text-white rounded-[30px] bg-red-500">Subscribe Now</button>
                        </div>
                        <div className='ml-[-80px] md:ml-0 '>

                            <div className=''>
                                <h2 className='text-[24px] font-bold'>$90</h2>
                                <p className='text-[14px] font-normal text-[#5B5B5B]'>Monthly</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`flex gap-[322px] items-center ${!active ? "hidden" : ""}`}>
                    <div className={`flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-5 md:gap-[56px]`} >
                        <div className="w-[275px] h-[] rounded-[50px] bg-[#FFF] pt-[45px] px-[22px] pb-[65px] "
                            style={{
                                borderRadius: '30px',
                                boxShadow: '0px 30px 60px 0px rgba(238, 68, 68, 0.15)',
                            }}
                        >
                            <h3 className="text-[24px] font-[500px] text-[#33357D]">Premium </h3>
                            <p className="subText text-[#5B5B5B]">Dating is a stage of romantic</p>
                            <ul className="list-disc subText text-[#5B5B5B] my-[20px] space-y-[10px]">
                                <li className="flex gap-[13px] items-center"> <span className="text-white inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" >&#x2713;</span>Single User</li>
                                <li className="flex gap-[13px] items-center"> <span className="text-white inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" >&#x2713;</span>Single User</li>
                                <li className="flex gap-[13px] items-center"> <span className="text-white inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" >&#x2713;</span>Single User</li>
                            </ul>
                            <button className="px-[32px] py-[20px] text-white rounded-[30px] bg-red-500">Subscribe Now</button>
                        </div>
                        <div className='text-white relative'>
                            <img className='h-[110px] w-[110px]' src={star} alt="" />
                            <div className='absolute top-6 right-6 md:top-6 md:right-6'>
                                <h2 className='text-[24px] font-bold'>$70</h2>
                                <p className='text-[14px] font-normal'>Yearly</p>
                            </div>

                        </div>
                    </div>
                    <div className={`flex md:gap-[56px] justify-center -ml-8 md:ml-0 `}>
                        <div className="w-[275px] h-[] rounded-[50px] bg-[#FFF] pt-[45px] px-[22px] pb-[65px] "
                            style={{
                                borderRadius: '30px',
                                boxShadow: '0px 30px 60px 0px rgba(238, 68, 68, 0.15)',
                            }}
                        >
                            <h3 className="text-[24px] font-[500px] mb-[10px] text-[#FF3D4F]">Standard </h3>
                            <p className="subText text-[#5B5B5B]">Dating is a stage of romantic</p>
                            <ul className="list-disc subText text-[#5B5B5B] my-[20px] space-y-[10px]">
                                <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full text-white" >&#x2713;</span>Single User</li>
                                <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full text-white" >&#x2713;</span>Single User</li>
                                <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#ED3E3E] p-1  rounded-full text-white" > <HiX /> </span>Multi users full access</li>
                            </ul>
                            <button className="px-[32px] py-[20px] text-white rounded-[30px] bg-red-500">Subscribe Now</button>
                        </div>
                        <div className='ml-[-80px] md:ml-0 '>

                            <div className=''>
                                <h2 className='text-[24px] font-bold'>$90</h2>
                                <p className='text-[14px] font-normal text-[#5B5B5B]'>Yearly</p>
                            </div>

                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default SubscribToday;