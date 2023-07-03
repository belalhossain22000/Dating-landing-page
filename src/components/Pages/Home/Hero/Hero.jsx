
import frameImage from '../../../../assets/Union.png'
import CircleImage from './CircleImage';

const Hero = () => {
    return (
        <div className="md:flex  items-center gap-[41px] mt-[46px] relative md:w-[1172px] w-full mx-auto">
            <div className="md:w-1/2 w-full p-4 md:p-0 ">
                <h1 className="heading "><span className='text-[#FF3D4F]'>Special</span> People <br />
                    Around You</h1>
                <p className="subText mt-5 text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
                <div className="md:flex items-center ml-10 md:ml-0 mt-[40px] h-[80px]">
                    <select name="selectItem" id="selectItem" className="border border-gray-300   md:px-[43px] py-[27px] rounded-l-[20px]">
                        <option value="">Select an item</option>
                        <option value="item1">Item 1</option>
                        <option value="item2">Item 2</option>
                        <option value="item3">Item 3</option>
                    </select>
                    <select name="selectItem" id="selectItem" className="border border-gray-300  md:px-[43px] py-[27px] ">
                        <option value="">Select an item</option>
                        <option value="item1">Item 1</option>
                        <option value="item2">Item 2</option>
                        <option value="item3">Item 3</option>
                    </select>
                    <button className="bg-[#FF3D4F] px-[20px] py-[26px] rounded-r-[20px]  hover:bg-white hover:text-[#FF3D4F] border hover:border-red-500 text-[18px] font-normal">Get Started </button>

                </div>
            </div>
            <div className="md:w-1/2 px-5 md:px-0 ">
                <img className='md:w-[564px] md:h-[606px] ' src={frameImage} alt="" />


                <div className='absolute right-5 md:right-[0%] bottom-4 bg-[#fff] px-[11px] py-[10px]' style={{
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