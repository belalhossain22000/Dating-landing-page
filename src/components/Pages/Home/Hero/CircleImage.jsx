import image1 from '../../../../assets/Ellipse 10.png';
import image2 from '../../../../assets/Ellipse 11.png';
import image3 from '../../../../assets/Ellipse 12.png';
import image4 from '../../../../assets/Ellipse 10.png';
import image5 from '../../../../assets/Ellipse 11.png';
import image6 from '../../../../assets/Ellipse 12.png';

const circleimages = [image1, image2, image3, image4, image5, image6];

const CircleImage = () => {
    return (
        <div className='flex'>
            {
                circleimages.map((image, index) => <div key={index} className='md:ml-[-10px] ml-[-20px] h-[50px] w-[50px]  '>
                    <img src={image} alt="" />
                </div>)
            }
        </div>
    );
};

export default CircleImage;