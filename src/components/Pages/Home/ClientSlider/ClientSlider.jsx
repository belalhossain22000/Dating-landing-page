
//swiper import
// import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


SwiperCore.use([Navigation]);


//image import
import image1 from '../../../../assets/Group 820.png';
import ClientCard from "../../../../utilities/ClientCard/ClientCard";

const slidesData = [
    {
        image: image1,
        name: 'Allien De Costa',
        title: 'Graphic Designer',
        rating: 4,
        descriptions: 'Dating is a stage of romantic relation ships in which two individual.'
    },
    {
        image: image1,
        name: 'Allien De Costa',
        title: 'Graphic Designer',
        rating: 4,
        descriptions: 'Dating is a stage of romantic relation ships in which two individual.'
    },
    {
        image: image1,
        name: 'Allien De Costa',
        title: 'Graphic Designer',
        rating: 4,
        descriptions: 'Dating is a stage of romantic relation ships in which two individual.'
    },
    {
        image: image1,
        name: 'Allien De Costa',
        title: 'Graphic Designer',
        rating: 4,
        descriptions: 'Dating is a stage of romantic relation ships in which two individual.'
    },
    {
        image: image1,
        name: 'Allien De Costa',
        title: 'Graphic Designer',
        rating: 4,
        descriptions: 'Dating is a stage of romantic relation ships in which two individual.'
    }
]


const ClientSlider = () => {
    return (
        <div className="bg-[#FDECEC] ">
            <div className="bg-[#FDECEC] mt-[134px] w-[1172px] mx-auto">
                {/* heading div/section */}
                <div>
                    <h1 className="heading pt-[92px] mb-[20px]">Clint Say’s</h1>
                    <p className="subText text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
                </div>

                {/* slider section  */}
                <div className="mt-[40px] pb-[150px]">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={24}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}

                        className="mySwiper"
                    >
                        {
                            slidesData.map((slide, index) => <SwiperSlide key={index}>
                                <ClientCard slide={slide}></ClientCard>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ClientSlider;