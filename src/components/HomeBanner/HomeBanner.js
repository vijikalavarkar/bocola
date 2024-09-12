import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import SliderBanner1 from '../../assets/images/slideBanner1.jpg'
import SliderBanner2 from '../../assets/images/slideBanner2.jpg'

const HomeBanner = () => {

    return (
        <>
            <div className="container mt-3">
                <div className="homeBannerSec">


                    <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        navigation={true}
                        loop={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="item">
                                <img src={SliderBanner1} alt="" className="w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={SliderBanner2} alt="" className="w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src={SliderBanner1} alt="" className="w-100" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default HomeBanner