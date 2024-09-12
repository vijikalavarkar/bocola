import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../components/ProductItem/ProductItem";

const RelatedProducts = (props) => {
    return (
        <>
            <div className="d-flex align-items-center mt-5">
                <div className="info">
                    <h3 className="mb-0 hd">{props.title}</h3>
                    
                </div>
                
            </div>

            <div className="product_row w-100 mt-3">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}
export default RelatedProducts