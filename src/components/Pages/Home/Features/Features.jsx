
import { TbMessage } from 'react-icons/tb';
import { TfiWorld } from 'react-icons/tfi';
import image from '../../../../assets/Rectangle 44.png';
import image2 from '../../../../assets/Rectangle 45.png';
import frame from '../../../../assets/Frame.png';



const Features = () => {


    return (
        <div className="md:mt-[130px] mt-[80px] w-full md:w-[1172px] mx-auto">
            <div className='px-10'>
                <h1 className="heading">Our Features</h1>
                <p className="subText text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
            </div>
            <div className='md:flex items-center justify-between gap-[124px] mt-[40px]'>
                <div className='relative px-5'  >
                    <div className='md:w-[572px] w-[500px]'>
                        <img className='w-full' src={image} alt="" />
                        <img className='absolute top-0 md:w-[572px] w-[500px]' src={image2} alt="" />
                    </div>
                    <div className='h-[200px] w-[200px] bg-gradient-to-b from-red-500 to-blue-900 shadow-lg rounded-full flex flex-col justify-center items-center absolute top-[280px] right-[20px] md:top-[200px] md:right-[-100px] text-white'>
                        <p>Start Now For</p>
                        <h4>FREE</h4>
                        <p>7 Day Trail</p>
                    </div>
                </div>

                {/* text/right side */}

                <div className='space-y-[40px] px-5 md:mt-0 mt-14 '>
                    <div className='flex items-center gap-[39px] text-gray-600
                     '>
                        <div className='bg-[#C64EF2] h-[81px] w-[81px] rounded-full flex justify-center items-center'>
                            <TbMessage className='text-[38px] text-white' />
                        </div>
                        <div>
                            <h3 className='text-[24px] font-medium'>Private Chat</h3>
                            <p className='subText'>Dating is a stage of romantic <br />  relationships in which two</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[39px] text-gray-600'>
                        <div className='bg-[#33357D] h-[81px] w-[81px] rounded-full flex justify-center items-center'>
                            <img src={frame} className='h-[38px] w-[38px] text-white' />
                        </div>
                        <div>
                            <h3 className='text-[24px] font-medium'>Facebook Login</h3>
                            <p className='subText'>Dating is a stage of romantic <br />relationships in which two</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[39px] text-gray-600'>
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