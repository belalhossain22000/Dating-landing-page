

import image1 from '../../../../assets/Rectangle 2.png';
import image2 from '../../../../assets/Rectangle 29.png';
import image3 from '../../../../assets/Rectangle 30.png';
import Card from '../../../../utilities/Card/Card';





const cardsData = [
    {
        image: image1,
        name: 'Allien De Costa',
        location: 'New York,USA'
    },
    {
        image: image2,
        name: 'Jonadi Ambos',
        location: 'London,UK'
    },
    {
        image: image3,
        name: 'Kerri Joth Eri',
        location: 'New York,USA'
    },
]



const PopularMember = () => {

   

    return (
        <div  className='bg-[#33357D]'>
            <div data-aos='zoom-in-up' data-aos-delay="50" data-aos-duration='2000'  className=" mt-[130px]  relative md:h-[625px] xl:w-[1172px] w-full  mx-auto ">
                <div data-aos='fade-right' data-aos-delay="50" data-aos-duration='3000'  className="pt-[54px] text-white px-5">
                    <h1 className="heading text-center mb-[20px]">Popular Members</h1>
                    <p className="subText text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
                </div>
                <div className='flex justify-center items-center md:px-5 mt-5 md:mt-0'>
                    <div
                       data-aos='fade-left' data-aos-delay="50" data-aos-duration='3000' 
                        className='md:flex md:space-y-0 space-y-5  gap-[24px] mx-auto  items-center mb-[100px] md:absolute top-[288px]'>
                        {
                            cardsData.map((card, index) => <Card key={index} card={card} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularMember;