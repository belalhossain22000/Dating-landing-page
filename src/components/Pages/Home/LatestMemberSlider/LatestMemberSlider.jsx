import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

SwiperCore.use([Navigation]);

//icon import
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

//image import for slide
import image1 from '../../../../assets/Rectangle 60.png'
import image2 from '../../../../assets/Rectangle 61.png'
import image3 from '../../../../assets/Rectangle 62.png'
import image4 from '../../../../assets/Rectangle 63.png'
import Card from "../../../../utilities/Card/Card";
import Reveals from "../../Reveals/Reveals";
// import { motion} from 'framer-motion'


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

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    // slider responsive
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            if (windowWidth >= 1280) {
                setSlidesPerView(4);
            } else if (windowWidth >= 1024) {
                setSlidesPerView(3);
            } else if (windowWidth >= 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Initialize AOS
    useEffect(() => {
        AOS.init({});

        return () => {
            AOS.refresh(); // Refresh AOS on component unmount
        };
    }, []);



    return (
        <div  className="mt-16 md:w-[1172px] mx-auto">
            <div className="px-5">
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
            {/* lagrge device slider */}
            <div  className="relative mt-[30px] md:w-[600px] lg:w-[900px] xl:w-full md:ml-[7%] lg:ml-[6%] xl:ml-0 hidden sm:block">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={slidesPerView}
                    spaceBetween={24}
                    freeMode={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    className="mySwiper "

                >
                    {
                        slidesData.map((card, index) => (
                            <SwiperSlide key={index} >
                                <div className="w-[275px]">
                                    <Card card={card} />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
                <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10">
                    <div
                        className="w-10 h-10flex items-center justify-center rounded-full cursor-pointer"
                        onClick={goPrev}
                    >
                        <BiLeftArrowAlt className="text-[24px]" />
                    </div>
                </div>
                <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2  z-10">
                    <div
                        className="w-10 h-10flex items-center justify-center rounded-full cursor-pointer"
                        onClick={goNext}
                    >
                        <BiRightArrowAlt className="text-[24px]" />
                    </div>
                </div>
            </div>
            {/* small device slider */}
            <div className="relative mt-[30px] md:hidden w-[275px] mx-auto ">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={24}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    className="mySwiper "

                >
                    <div className="h-[300px]">
                        {
                            slidesData.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <Card card={card} />
                                </SwiperSlide>
                            ))
                        }
                    </div>

                </Swiper>
                <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10">
                    <div
                        className="w-10 h-10flex items-center justify-center rounded-full cursor-pointer"
                        onClick={goPrev}
                    >
                        <BiLeftArrowAlt className="text-[24px]" />
                    </div>
                </div>
                <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2  z-10">
                    <div
                        className="w-10 h-10flex items-center justify-center rounded-full cursor-pointer"
                        onClick={goNext}
                    >
                        <BiRightArrowAlt className="text-[24px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestMemberSlider;
