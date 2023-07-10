// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './ClientSlide.css';

//image import
import image1 from '../../../../assets/Group 820.png';
import ClientCard from "../../../../utilities/ClientCard/ClientCard";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    //slider responsive
    const [slidesPerView, setSlidesPerView] = useState(3);

    const windowWidth = window.innerWidth;
    useEffect(() => {
        const handleResize = () => {
            
          if (windowWidth >= 1280) {
            setSlidesPerView(3);
          } else if (windowWidth >= 1024) {
            setSlidesPerView(2);
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
        <div className="bg-[#FDECEC]">
            <div className="bg-[#FDECEC] mt-[134px] w-full max-w-[1280px] mx-auto">
                {/* heading div/section */}
                <div data-aos='zoom-in-down' data-aos-delay="50" data-aos-duration='1000' className="px-5">
                    <h1 className="heading pt-[92px] text-center mb-[20px]">Clint Say’s</h1>
                    <p className="subText text-center">Dating is a stage of romantic relationships in which two individuals <br /> engage in an activity together,most often with the intention.</p>
                </div>

                {/* slider section  */}
            
                <div data-aos='zoom-out-up' data-aos-delay="50" data-aos-duration='2000'  className={`mt-[40px] ${windowWidth === 425?' ml-5':''} md:ml-0 pb-10 md:pb-[150px] lg:w-[800px] lg:mx-auto xl:w-full md:mx-2`}>
                   <div>
                     <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={24}
                        pagination={{
                            clickable: true,
                            style: { background: '#ED3E3E' },
                            
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
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