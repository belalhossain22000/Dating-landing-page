// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './ClientSlide.css';

//image import
import image1 from '../../../../assets/Group 820.png';
import ClientCard from "../../../../utilities/ClientCard/ClientCard";


import Reveals from "../../Reveals/Reveals";

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
        <div className="bg-[#FDECEC] px-5 pb-5">
            <div className="bg-[#FDECEC] mt-[134px] w-full max-w-[1280px] mx-auto">
                {/* heading div/section */}
                <div className="px-5">
                    <Reveals>
                        <h1 className="text-[40px] md:text-[48px] font-bold pt-[92px] text-center mb-[20px]">Clint Say’s</h1>
                    </Reveals>
                    <Reveals>
                        <p className="subText text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
                    </Reveals>
                </div>

                {/* slider section  */}

                <div className={`mt-[40px]`}>
                    <div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={24}
                            pagination={{
                                clickable: true,
                                style: { background: '#ED3E3E' },

                            }}
                            modules={[Pagination]}
                            className="mySwiper lsm:w-[80%] xlg:w-full"
                            breakpoints={{

                    
                                375: {
                                    slidesPerView: 1,
                                    
                                },
                                576: {
                                    slidesPerView: 2,
                                    
                                },
                                991: {
                                    slidesPerView: 3,
                                    
                                },
                                
                            }}
                        >
                            {slidesData.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <ClientCard slide={slide}></ClientCard>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSlider;