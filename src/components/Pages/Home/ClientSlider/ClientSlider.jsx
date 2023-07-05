// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

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
            <div className="bg-[#FDECEC] mt-[134px] md:w-[1172px] mx-auto">
                {/* heading div/section */}
                <div className="px-5">
                    <h1 className="heading pt-[92px] mb-[20px]">Clint Say’s</h1>
                    <p className="subText text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
                </div>

                {/* slider section  */}
                <div className="mt-[40px] pb-[150px] hidden sm:block">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                          style: { background: '#ED3E3E' },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        
                    >
                        {
                            slidesData.map((slide, index) => <SwiperSlide key={index}>
                                <ClientCard slide={slide}></ClientCard>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className="mt-[40px] pb-[150px] md:hidden w-[374px] mx-auto h-[372px]">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                          style: { background: '#ED3E3E' },
                        }}
                        modules={[Pagination]}
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