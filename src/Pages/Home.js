import HomeBanner from "../components/HomeBanner/HomeBanner"
import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'
import banner4 from '../assets/images/banner4.jpg'
import { Button } from "@mui/material"
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../components/ProductItem/ProductItem";
import HomeCat from "../components/HomeCat/HomeCat";
import NewsLetter from "../components/NewsLetter/NewsLetter"


const Home = () => {




    return (
        <>
            <HomeBanner />

            
            <HomeCat />


            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={banner1} alt="" className="cursor" />
                                </div>

                                <div className="banner">
                                    <img src={banner2} alt="" className="cursor bannerstyle" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 productRow">

                            <div className="d-flex align-items-center ">
                                <div className="info">
                                    <h3 className="mb-0 hd">BEST SELLER</h3>
                                    <p className="text-color text-sml mb-0">Do not miss current offer until the end of march</p>
                                </div>
                                <Button className="viewAllbtn ml-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                            <Swiper
                                    slidesPerView={4}
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





                            <div className="d-flex align-items-center mt-5">
                                <div className="info">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-color text-sml mb-0">New product with updated stocks</p>
                                </div>
                                <Button className="viewAllbtn ml-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
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


                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner">
                                    <img src={banner3} alt="" className="cursor" />
                                </div>

                                <div className="banner">
                                    <img src={banner4} alt="" className="cursor" />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>


            <NewsLetter />

            
        </>
    )
}
export default Home