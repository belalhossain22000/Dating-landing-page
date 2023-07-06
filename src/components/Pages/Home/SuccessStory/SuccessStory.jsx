
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

const SuccessStory = () => {
    return (
        <div className="md:mt-[148px] mt-[50px] w-[1172px] mx-auto md:flex items-center justify-between gap-[210px] ">
            <div className="1/2 px-10 ">
                <h1 className="text-[48px] font-bold">Stories of Success <br />
                    are everywhere</h1>
                <p className="subText mb-[40px] mt-[20px] text-[#5B5B5B]">Dating is a stage of romantic relationships in which <br /> two individuals engage in an activity.</p>
                <button className="bg-[#FF3D4F] text-white text-[20px] font-normal px-[32px] py-[20px] rounded-[30px]"
                    style={{ boxShadow: "0px 20px 40px 0px rgba(237, 62, 62, 0.20)" }}
                >Read More</button>
            </div>
            {/* right side div for circle images */}
            <div className="1/2 relative px-5 mt-24">
                {/* big circle image  */}
                <div className='md:w-[468px] w-[300px] ml-[3%]'>
                    <img src={circle} alt="" />
                </div>
                {/* mini circle images */}
                <div className='absolute md:top-[173px]  md:right-[173px] top-[80px] right-[76.5%]'>
                    <div className='relative flex justify-center items-center h-[136px] w-[136px]'>
                        <img src={image1} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image12} alt="" />
                    </div>
                </div>
                <div className='absolute top-[15%] md:top-[100px] md:left-[8px] left-[-px]'>
                    <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                        <img src={image2} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image7} alt="" />
                    </div>
                </div>
                <div className='absolute top-[15%] md:top-[100px] right-[66%] md:right-[-18px]'>
                    <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                        <img src={image3} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image9} alt="" />
                    </div>
                </div>
                <div className='absolute md:left-[200px] left-[150px] top-[-38px]'>
                    <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                        <img src={image4} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image8} alt="" />
                    </div>
                </div>
                <div className='absolute md:bottom-8 bottom-0 left-[54px]'>
                    <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                        <img src={image5} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image11} alt="" />
                    </div>
                </div>
                <div className='md:right-[30px] right-[70%] bottom-0 md:bottom-8 absolute'>
                    <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                        <img src={image6} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image10} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SuccessStory;