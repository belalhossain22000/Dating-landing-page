

import star from '../../../../assets/Star 2.png';


const SubscribToday = () => {
    return (
        <div className="mt-[130px] px-[134px]">
            <h1 className="heading">Subscribe Today</h1>
            <p className="subText text-center">Dating is a stage of romantic relationships in which two <br /> individuals engage in an activity together,</p>
            <div className="w-[212px] h-[60px] mx-auto mt-[40px] border-[1px] rounded-[30px] border-[#DDD] flex justify-center items-center gap-[15px]">
                <button className="text-[#FF3D4F]">Monthly</button>
                <button className="bg-[#FF3D4F] px-[23px] py-[10px] rounded-[30px]"> Yearly</button>
            </div>
            {/* card section div  */}
            <div className='mt-[35px] flex items-center gap-[156px]'>
                <div className='flex gap-[56px]'>
                    <div className="w-[275px] h-[] rounded-[50px] bg-[#FFF] pt-[45px] px-[22px] pb-[65px] "
                        style={{
                            borderRadius: '30px',
                            boxShadow: '0px 30px 60px 0px rgba(238, 68, 68, 0.15)',
                        }}
                    >
                        <h3 className="text-[24px] font-[500px] text-[#33357D]">Premium </h3>
                        <p className="subText text-[#5B5B5B]">Dating is a stage of romantic</p>
                        <ul className="list-disc subText text-[#5B5B5B] my-[20px] space-y-[10px]">
                            <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" >&#x2713;</span>Single User</li>
                            <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" >&#x2713;</span>Single User</li>
                            <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" >&#x2713;</span>Single User</li>
                        </ul>
                        <button className="px-[32px] py-[20px]  rounded-[30px] bg-red-500">Subscribe Now</button>
                    </div>
                    <div className='text-white relative'>
                        <img className='h-[110px] w-[110px]' src={star} alt="" />
                        <div className='absolute top-6 right-7'>
                            <h2 className='text-[24px] font-bold'>$70</h2>
                            <p className='text-[14px] font-normal'>Monthly</p>
                        </div>

                    </div>
                </div>
                <div className='flex gap-[56px]'>
                    <div className="w-[275px] h-[] rounded-[50px] bg-[#FFF] pt-[45px] px-[22px] pb-[65px] "
                        style={{
                            borderRadius: '30px',
                            boxShadow: '0px 30px 60px 0px rgba(238, 68, 68, 0.15)',
                        }}
                    >
                        <h3 className="text-[24px] font-[500px] text-[#33357D]">Premium </h3>
                        <p className="subText text-[#5B5B5B]">Dating is a stage of romantic</p>
                        <ul className="list-disc subText text-[#5B5B5B] my-[20px] space-y-[10px]">
                            <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" >&#x2713;</span>Single User</li>
                            <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" >&#x2713;</span>Single User</li>
                            <li className="flex gap-[13px] items-center"> <span className="inline-flex items-center justify-center h-6 w-6 bg-[#368977] p-1 rounded-full" >&#x2713;</span>Single User</li>
                        </ul>
                        <button className="px-[32px] py-[20px]  rounded-[30px] bg-red-500">Subscribe Now</button>
                    </div>
                    <div className=' '>
                       
                        <div className=''>
                            <h2 className='text-[24px] font-bold'>$90</h2>
                            <p className='text-[14px] font-normal text-[#5B5B5B]'>Yearly</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribToday;