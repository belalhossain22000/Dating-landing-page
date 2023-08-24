import { useRef, } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


SwiperCore.use([Navigation]);

//icon import
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

//image import for slide
import image1 from '../../../../assets/Rectangle 60.png'
import image2 from '../../../../assets/Rectangle 61.png'
import image3 from '../../../../assets/Rectangle 62.png'
import image4 from '../../../../assets/Rectangle 63.png'
import Reveals from "../../Reveals/Reveals";
import Card2 from "../../../../utilities/card2/card2";


const slidesData = [
    {
        name: 'Allien De Costa',
        image: image1
    },
    {
        name: 'Jonadi Ambos',
        image: image2
    },
    {
        name: 'Allien De Costa',
        image: image1
    },
    {
        name: 'Sonth Smith',
        image: image3
    },
    {
        name: 'Allien De Costa',
        image: image1
    },
    {
        name: 'Kerri Joth Eri',
        image: image4
    },
]



const LatestMemberSlider = () => {
    const swiperRef = useRef(null);
    // btn for slider
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    // btn  for slider
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };




    return (
        <div className="relative mt-16 xl:w-[1172px] w-full px-5 xl:p-0 mx-auto">
            <div className="bg-blu-400 flex flex-col items-center justify-center">
                {/* heading  */}
                <Reveals>
                    <h1 className="text-[40px] md:text-[48px] font-bold text-center mb-5">Latest Register Member</h1>
                </Reveals>
                <Reveals>
                    <p className="subText text-center">
                        Dating is a stage of romantic relationships in which two individuals
                        <br />
                        engage in an activity together, most often with the intention.
                    </p>
                </Reveals>
            </div>
            {/* slider */}
            <div className="relative bg-purpl-500  mt-[30px] ">

                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={0}
                    // freeMode={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    className="bg-purpe-500 mySwiper xlg:left-3 xl:left-0 w-[275px] md:w-[580px] xlg:w-[900px] xl:w-[1170px]"
                    breakpoints={{

                    
                        375: {
                            slidesPerView: 1,
                            
                        },
                        768: {
                            slidesPerView: 2,
                            
                        },
                        991: {
                            slidesPerView: 3,
                            
                        },
                        1160: {
                            slidesPerView: 4,
                            
                        },
                    }}

                >
                    {
                        slidesData.map((card, index) => (
                            <SwiperSlide key={index} >
                                <div className="w-[275px]">
                                    <Card2 card={card} />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>


            {/* btn for chang slide */}
            {/* btn pev */} 
            <div className="absolute left-0 xl:-left-[5%] top-1/2 transform - z-10">
                <div
                    className="w-10 h-10 bg-black text-white transition-all duration-700 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={goPrev}
                >
                    <BsArrowLeft className="text-2xl" />
                </div>
            </div>
            {/* btn next */}
            <div className="absolute right-0 xl:right-[-3.5%] top-1/2 transform   z-10">
                <div
                    className="w-10 h-10 bg-black text-white transition-all duration-700 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={goNext}
                >
                    <BsArrowRight className="text-2xl" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default LatestMemberSlider;
