
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
        <div className="bg-[#33357D] mt-[130px]  relative h-[625px]">
            <div className="pt-[54px]">
                <h1 className="heading">Popular Members</h1>
                <p className="subText text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
            </div>
            <div className='flex gap-[24px] mx-auto justify-center items-center mb-[100px] absolute top-[288px]'>
                {
                    cardsData.map((card, index) => <Card key={index} card={card} />)
                }
            </div>
        </div>
    );
};

export default PopularMember;