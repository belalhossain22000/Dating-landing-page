
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
        <div className="mt-[148px] px-[134px] flex items-center gap-[210px] ">
            <div className="1/2 ">
                <h1 className="text-[48px] font-bold">Stories of Success <br />
                    are everywhere</h1>
                <p className="subText mb-[40px] mt-[20px] text-[#5B5B5B]">Dating is a stage of romantic relationships in which <br /> two individuals engage in an activity.</p>
                <button className="bg-[#FF3D4F] text-[20px] font-normal px-[32px] py-[20px] rounded-[30px]"
                    style={{ boxShadow: "0px 20px 40px 0px rgba(237, 62, 62, 0.20)" }}
                >Read More</button>
            </div>
            {/* right side div for circle images */}
            <div className="1/2 relative">
                {/* big circle image  */}
                <div className='w-[468px]'>
                    <img src={circle} alt="" />
                </div>
                {/* mini circle images */}
                <div className='absolute top-[173px] right-[173px]'>
                    <div className='relative flex justify-center items-center h-[136px] w-[136px]'>
                        <img src={image1} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image12} alt="" />
                    </div>
                </div>
                <div className='absolute top-[124px] left-[-38px]'>
                    <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                        <img src={image2} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image7} alt="" />
                    </div>
                </div>
                <div className='absolute top-[124px] right-[-38px]'>
                    <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                        <img src={image3} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image9} alt="" />
                    </div>
                </div>
                <div className='absolute left-[174px] top-[-38px]'>
                    <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                        <img src={image4} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image8} alt="" />
                    </div>
                </div>
                <div className='absolute bottom-0 left-[54px]'>
                    <div className='relative flex justify-center items-center h-[98px] w-[98px]'>
                        <img src={image5} alt="" />
                        <img className='absolute top-0 left-0 -z-10' src={image11} alt="" />
                    </div>
                </div>
                <div className='right-[54px] bottom-0 absolute'>
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