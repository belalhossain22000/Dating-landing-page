
// import images for circle
import circle from '../../../../assets/Ellipse 35.png';
import image1 from '../../../../assets/Ellipse 36.png';
import image2 from '../../../../assets/Ellipse 37.png';
import image3 from '../../../../assets/Ellipse 38.png';
import image4 from '../../../../assets/Ellipse 39.png';
import image5 from '../../../../assets/Ellipse 40.png';
import image6 from '../../../../assets/Ellipse 41.png';
import image7 from '../../../../assets/Ellipse 42.png';
import image8 from '../../../../assets/Ellipse 43.png';
import image9 from '../../../../assets/Ellipse 44.png';
import image10 from '../../../../assets/Ellipse 45.png';
import image11 from '../../../../assets/Ellipse 46.png';
import image12 from '../../../../assets/Ellipse 47.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const SuccessStory = () => {

    useEffect(() => {
        AOS.init({}); // Initialize AOS

        return () => {
            AOS.refresh(); // Refresh AOS on component unmount
        };
    }, []);

    return (
        <div className="md:mt-[148px] mt-[50px] w-full max-w-[1280px] mx-auto md:flex items-center lg:gap-[210px] ">
            <div data-aos='fade-right' data-aos-delay="50" data-aos-duration='2000' className="1/2 px-10 md:text-left text-center">
                <h1 className=" lg:text-[48px] text-[35px] font-bold text-[#2D2D2D]">Stories of Success <br />
                    are everywhere</h1>
                <p className="subText mb-[40px] mt-[20px] text-[#5B5B5B]">Dating is a stage of romantic relationships in which <br /> two individuals engage in an activity.</p>
                <button className="bg-[#FF3D4F] text-white text-[20px] font-normal px-[32px] py-[20px] rounded-[30px]"
                    style={{ boxShadow: "0px 20px 40px 0px rgba(237, 62, 62, 0.20)" }}
                >Read More</button>
            </div>
            {/* right side div for circle images */}
            <div  className='flex justify-center'>
                <div className="1/2 relative px-5 mt-24 w-[468px] ml-0">
                    {/* big circle image  */}
                    <div data-aos='zoom-in-up' data-aos-delay="50" data-aos-duration='2000' className='md:w-[468px] '>
                        <img src={circle} alt="" />
                    </div>
                    {/* mini circle images */}
                    <div data-aos='zoom-in-up' data-aos-delay="50" data-aos-duration='3000' className='absolute md:top-[173px]  md:right-[150px] top-[130px] right-[37%]'>
                        <div className='relative flex justify-center items-center h-[136px] w-[136px]'>
                            <img src={image1} alt="" />
                            <img className='absolute top-0 left-0 -z-10' src={image12} alt="" />
                        </div>
                    </div>
                    <div data-aos='fade-right' data-aos-delay="50" data-aos-duration='2000' className='absolute top-[30%] md:top-[100px] md:left-[-8px] left-[-5%]'>
                        <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                            <img src={image2} alt="" />
                            <img className='absolute top-0 left-0 -z-10' src={image7} alt="" />
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-delay="50" data-aos-duration='3000' className='absolute top-[30%] md:top-[100px] right-[-3%] md:right-[-40px]'>
                        <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                            <img src={image3} alt="" />
                            <img className='absolute top-0 left-0 -z-10' src={image9} alt="" />
                        </div>
                    </div>
                    <div data-aos='fade-down' data-aos-delay="50" data-aos-duration='2000' className='absolute md:left-[200px] left-[150px] top-[-38px]'>
                        <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                            <img src={image4} alt="" />
                            <img className='absolute top-0 left-0 -z-10' src={image8} alt="" />
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-delay="50" data-aos-duration='3000' className='absolute md:bottom-8 bottom-0 left-[54px]'>
                        <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                            <img src={image5} alt="" />
                            <img className='absolute top-0 left-0 -z-10' src={image11} alt="" />
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-delay="50" data-aos-duration='2000' className='md:right-[30px] right-[5%] bottom-5 md:bottom-8 absolute'>
                        <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                            <img src={image6} alt="" />
                            <img className='absolute top-0 left-0 -z-10' src={image10} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SuccessStory;