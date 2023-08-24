



import { TbMessage } from 'react-icons/tb';
import { TfiWorld } from 'react-icons/tfi';
import image from '../../../../assets/Rectangle 44.png';
import image2 from '../../../../assets/Rectangle 45.png';
// import frame from '../../../../assets/Frame.png';
import Reveals from '../../Reveals/Reveals';
import { BiLogIn } from 'react-icons/bi';





const Features = () => {
    
    return (
        <div className="md:mt-[130px] mt-[80px] w-full max-w-[1280px] mx-auto px-5 md:px-0">
            {/*heading side */}
            <div className='px-10'>
                <Reveals>
                    <h1 className=" text-[40px] md:text-[48px] font-bold  text-center">Our Features</h1>
                </Reveals>
                <Reveals>
                    <p className="subText text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
                </Reveals>
            </div>
            {/* bottom side */}
            <div className='flex md:flex-row flex-col items-center justify-center lg:gap-[124px] mt-[40px]'>
                <div className=' px-5  '>
                    <div>
                        <div className='relative lsm:w-[400px] xl:w-[572px] '>

                            <img className='w-auto  h-auto' src={image} alt="" />
                            <img className='absolute top-0  w- h-full ' src={image2} alt="" />
                            {/* gradient circle */}
                            <div className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] bg-gradient-to-b from-red-500 to-blue-900 shadow-lg rounded-full flex flex-col justify-center items-center absolute right-0 bottom-0 lg:right-[-18%] lg:bottom-[30%] text-white'>

                                <p className='text-lg font-normal'>Start Now For</p>
                                <h4 className='text-2xl font-medium'>FREE</h4>
                                <p className='text-lg font-normal'>7 Day Trail</p>

                            </div>
                        </div>
                    </div>

                </div>

                {/* text/right side */}

                <div className='space-y-[40px]  xlg:px-5 md:mt-0 mt-14 '>
                    <Reveals>
                        <div

                            className='flex items-center gap-[39px] text-gray-600
                     '>
                            <div
                                className='bg-[#C64EF2] h-[60px] w-[60px] lg:h-[81px] lg:w-[81px] rounded-full flex justify-center items-center'>
                                <TbMessage className='lg:text-[38px] text-[35px] text-white' />
                            </div>
                            <div>
                                <h3 className='text-[24px] font-medium'>Private Chat</h3>
                                <p className='subText'>Dating is a stage of romantic <br />  relationships in which two</p>
                            </div>
                        </div>
                    </Reveals>
                    <Reveals>
                        <div

                            className='flex items-center gap-[39px] text-gray-600'>
                            <div className='bg-[#33357D] h-[60px] w-[60px] lg:h-[81px] lg:w-[81px] rounded-full flex justify-center items-center'>
                                <BiLogIn className='text-[38px] text-white' /> {/* <img src={frame} className='lg:h-[38px] lg:w-[38px] h-[30px] w-[30px] text-white' /> */}
                            </div>
                            <div>
                                <h3 className='text-[24px] font-medium'>Facebook Login</h3>
                                <p className='subText'>Dating is a stage of romantic <br />relationships in which two</p>
                            </div>
                        </div>
                    </Reveals>
                    <Reveals>
                        <div

                            className='flex items-center gap-[39px] text-gray-600'>
                            <div className='bg-[#FF3D4F] h-[60px] w-[60px] lg:h-[81px] lg:w-[81px] rounded-full flex justify-center items-center'>
                                <TfiWorld className='lg:text-[38px] text-[35px] text-white' />
                            </div>
                            <div>
                                <h3 className='text-[24px] font-medium'>Discovery Setting</h3>
                                <p className='subText'>Dating is a stage of romantic  <br />relationships in which two</p>
                            </div>
                        </div>
                    </Reveals>
                </div>
            </div>
        </div>
    );
};

export default Features;