import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Tests = () => {
    return(
        <>
            <div className="container">

            <Swiper
                        slidesPerView={10}
                        spaceBetween={3}
                        navigation={true}
                        slidesPerGroup={1}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>



                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>

                        <SwiperSlide>
                            <h1>ljagljno</h1>
                        </SwiperSlide>
                    </Swiper>

            </div>
        </>
    )
}
export default Tests