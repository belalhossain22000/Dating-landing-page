
import frameImage from '../../../../assets/Union.png'
import CircleImage from './CircleImage';

const Hero = () => {
    return (
        <div className="md:flex justify-between gap-[41px] items-center mt-[46px] relative xl:w-[1280px] md:px-5 w-full mx-auto">
            <div className="md:w-1/2 w-full p-4 md:p-0 ">
                <h1 className="heading text-left "><span className='text-[#FF3D4F]'>Special</span> People <br />
                    Around You</h1>
                <p className="subText text-left mt-5 ">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
                <div className="md:flex items-center md:gap-[38px]  md:w-[426px] md:h-[80px] p-5 md:p-0 space-y-5 md:space-y-0  md:ml-0 mt-[40px] md:rounded-l-[20px] rounded-md" style={{boxShadow:' 0px 30px 250px 0px rgba(51, 51, 51, 0.20)'}}>
                    <select name="selectItem" id="selectItem" className="  w-full md:w-[142px] md:ml-[43px]  md:rounded-l-[20px] rounded-md ">
                        <option value="">I am </option>
                        <option value="item1">Item 1</option>
                        <option value="item2">Item 2</option>
                        <option value="item3">Item 3</option>
                    </select>
                    <select name="selectItem" id="selectItem" className=" w-full md:w-[142px] rounded-md md:rounded-none ">
                        <option value="">Looking for</option>
                        <option value="item1">Item 1</option>
                        <option value="item2">Item 2</option>
                        <option value="item3">Item 3</option>
                    </select>
                    <button className="bg-[#FF3D4F] w-full md:px-[20px] py-[26px] md:rounded-r-[20px] rounded-md text-white hover:bg-white hover:text-[#FF3D4F]  border hover:border-red-500 text-[18px] font-normal">Get Started </button>

                </div>
            </div>
            <div className="md:w-1/2 px-5 md:px-0 ">
                <img className='md:w-[564px] md:h-[606px] ' src={frameImage} alt="" />


                <div className='absolute right-[0%] md:-bottom-11 xl:bottom-4 xl:right-[4%] bottom-4 bg-[#fff] pl-12 pt-5 md:px-[11px] md:py-[10px]' style={{
                    borderRadius: '60px',
                    background: '#FFF',
                    boxShadow: '0px 20px 50px 0px rgba(76, 9, 144, 0.20)',
                }}>
                    <CircleImage />
                </div>
            </div>
        </div>
    );
};

export default Hero;