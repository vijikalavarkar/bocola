import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useRef, useState } from "react";

import 'swiper/css';
import 'swiper/css/navigation';


const ProductZoom = () => {

    const [sliderIndex, setSliderIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSliderIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    return(
        <>
            <div className="productZoom">
            <div className="productZoom position-relative">
                            <div className="badge badge-primary">25%</div>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                navigation={false}
                                slidesPerGroup={1}
                                modules={[Navigation]}
                                className="zoomSliderBig"
                                ref={zoomSliderBig}
                            >

                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src="https://m.media-amazon.com/images/I/61akt30bJsL._SX679_.jpg" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src="https://m.media-amazon.com/images/I/61SvazFMS5L._SX679_.jpg" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom zoomType="hover" zoomScale={1} src="https://m.media-amazon.com/images/I/61C7QxrH7NL._SX679_.jpg" />
                                    </div>
                                </SwiperSlide>

                            </Swiper>

                        </div>


                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={true}
                            slidesPerGroup={1}
                            modules={[Navigation]}
                            className="zoomSlider"
                            ref={zoomSlider}
                        >

                            <SwiperSlide>
                                <div className={`item ${sliderIndex === 0 && 'item_active'}`}>
                                    <img src="https://m.media-amazon.com/images/I/61akt30bJsL._SX679_.jpg" alt="" className="w-100" onClick={() => goto(0)} />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={`item ${sliderIndex === 0 && 'item_active'}`}>
                                    <img src="https://m.media-amazon.com/images/I/61SvazFMS5L._SX679_.jpg" alt="" className="w-100" onClick={() => goto(1)} />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={`item ${sliderIndex === 0 && 'item_active'}`}>
                                    <img src="https://m.media-amazon.com/images/I/61C7QxrH7NL._SX679_.jpg" alt="" className="w-100" onClick={() => goto(2)} />
                                </div>
                            </SwiperSlide>



                        </Swiper>
            </div>
        </>
    )
}
export default ProductZoom