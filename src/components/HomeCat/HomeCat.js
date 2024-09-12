import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import category from '../../assets/images/apple.jpg'
import { useState } from 'react';

const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',

    ])

    return (
        <>
            <section className="homeCat">
                <div className="container">

                    <h3 className='mb-4 hd'>Featured Categories</h3>

                    <Swiper
                        slidesPerView={10}
                        spaceBetween={8}
                        navigation={true}
                        slidesPerGroup={1}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >

                        {
                            itemBg?.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <div className='item text-center' style={{background:item}}>
                                            <img src={category} alt="" className='w-100' />
                                            <h6>Red apple</h6>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }





                    </Swiper>

                </div>
            </section>
        </>
    )
}
export default HomeCat